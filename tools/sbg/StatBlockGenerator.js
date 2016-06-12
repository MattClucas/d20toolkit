/**
 * The stat input factory has convienient input type creation methods.
 *
 * Structuring the StatInputFactory like this effectively makes the actual Input objects private and unchangeable outside of this function. It also reduces the size of the global scope.
 */
var StatInputFactory = (function()
{
    function createInputBase(alternateDisplayTitle, id)
    {
        // create root form-group for input
        var $inputRoot = $('<div></div>');
        $inputRoot.addClass("form-group");

        var labelText = alternateDisplayTitle || id;
        var $label = $('<label for="' + id + '">' + labelText + ':</label>');
        $inputRoot.append($label);

        return $inputRoot;
    }

    function applyInputAttributes($input, id, placeholderText)
    {
        $input.addClass("form-control");
        $input.attr('id', id);
        $input.attr('name', id);
        if (placeholderText)
        {
            $input.attr("placeholder", placeholderText);
        }
    }

    function isValidString(str)
    {
        return str && typeof str === 'string';
    }

    function validateId(id)
    {
        if (!isValidString(id))
        {
            throw "Id is not valid.";
        }
    }

    function createListInputDiv(id, values)
    {
        var $inputDiv = $('<div>');
        // only create a list input if there are values
        if (values.length > 0)
        {
            var listOptionsId = id + "-options";

            var $listInput = $('<input list="' + listOptionsId + '">');
            applyInputAttributes($listInput, id);
            $inputDiv.append($listInput);

            var $listOptions = $('<datalist>');
            $listOptions.attr('id', listOptionsId);
            values.forEach(function(option)
            {
                var $option = $('<option>');
                $option.attr('value', option);
                $listOptions.append($option);
            });
            $inputDiv.append($listOptions);
        }

        // if there are no values, just make a text input
        else
        {
            var $input = $('<input type="text">');
            applyInputAttributes($input, id);
            $inputDiv.append($input);
        }
        return $inputDiv;
    }

    function createSelect(id, values, isMultiselect)
    {
        // non modifiable, just do a select drop down menu
        // create select input
        var $select = $('<select></select>');
        if (isMultiselect)
        {
            $select.attr('multiple', 'multiple');
        }
        applyInputAttributes($select, id);
        values.forEach(function(option)
        {
            var $option = $('<option>' + option + '</option>');
            $select.append($option);
        });
        return $select;
    }

    function createWrapperRowDiv()
    {
        return $('<div class="row">');
    }

    // for a list input this creates the button that adds a new list item from the inputs
    function createListItemAddButton(columnWidth, $listHolder, $inputArray)
    {
        // create dom to hold add button
        var $btnDiv = $('<div class="col-xs-' + columnWidth + '">');
        var $addBtn = $('<button class="btn btn-default btn-block" type="button">Add</button>');
        $btnDiv.append($addBtn);

        // add button will add the current item to the list dom
        $addBtn.click(function()
        {
            var $addedItem = $('<li class="list-group-item">');

            // gather all the inputs into hidden inputs and put them in the li element
            var combinedInputs = [];
            $inputArray.forEach(function($input)
            {
                var value = $input.val().trim();
                // only do anything if there is a value
                if (value)
                {
                    var $itemInput = $('<input type="hidden">');
                    $itemInput.attr('name', $input.attr('name'));
                    $itemInput.val(value);
                    combinedInputs.push(value);
                    $addedItem.append($itemInput);
                }
            });
            if (combinedInputs.length)
            {
                var combinedInputString = combinedInputs.join(" ");

                // append a text node instead of doing .text() because using .text()
                // overwrites the innerHtml which holds all the appended hidden inputs
                $addedItem.append(document.createTextNode(combinedInputString));

                // create a "button" that will remove this item when clicked on
                var $removeBtn = $('<span class="badge">X</span>');
                $removeBtn.css("cursor", "pointer");
                $removeBtn.click(function()
                {
                    $addedItem.remove();
                });
                $addedItem.append($removeBtn);
                $listHolder.append($addedItem);
            }
        });

        // click the add button when enter is pressed on the input
        $inputArray.forEach(function($input)
        {
            $input.keydown(function(event)
            {
                if (event.keyCode == 13)
                {
                    $addBtn.click();
                }
            })
        });
        return $btnDiv;
    }

    // define all input types here
    // if there are no values (values=[]) and the input is modifiable, the input becomes a short text box
    function ListInput(id, values, alternateDisplayTitle, multiSelect, modifiable, hasAmount)
    {
        validateId(id);
        this.id = id;
        // ensure values is an array
        this.values = (values && values.constructor === Array) ? values : [];
        this.alternateDisplayTitle = alternateDisplayTitle || null;
        this.multiSelect = multiSelect || false;
        this.modifiable = modifiable || false;
        this.hasAmount = hasAmount || false;
    }
    ListInput.prototype.createInputDom = function()
    {
        var self = this;
        var $inputRoot = createInputBase(self.alternateDisplayTitle, self.id);

        if (self.modifiable)
        {
            // create input dom for multiselect modifiable list
            if (self.multiSelect)
            {
                // create dom list to hold added items
                var $selectedList = $('<ul class="list-group">');
                $inputRoot.append($selectedList);

                // create dom to hold the input element
                var $wrapperRow = createWrapperRowDiv();
                var $inputDiv = createListInputDiv(self.id, self.values);
                var $input = $inputDiv.children("input");
                var listInputColumnWidth = (self.hasAmount) ? 5 : 9;
                $inputDiv.addClass('col-xs-' + listInputColumnWidth);
                $wrapperRow.append($inputDiv);

                var buttonInputs = [$input];
                if (self.hasAmount)
                {
                    // add amount
                    var $amountInput = new NumberInput(self.id + '-amount', 'Amount').createInputDom()
                        .find("input");
                    var $amountDiv = $('<div class="col-xs-4">');
                    $amountDiv.append($amountInput);
                    $wrapperRow.append($amountDiv);
                    $inputRoot.append($wrapperRow);
                    buttonInputs.push($amountInput);
                }

                // create add button
                var $btnDiv = createListItemAddButton(3, $selectedList, buttonInputs);
                $wrapperRow.append($btnDiv);
                $inputRoot.append($wrapperRow);
            }
            else
            {
                if (self.hasAmount)
                {
                    var $wrapperRow = createWrapperRowDiv();
                    var $inputDiv = createListInputDiv(self.id, self.values);
                    $inputDiv.addClass('col-xs-8');
                    $wrapperRow.append($inputDiv);

                    // add amount
                    var $amountInput = new NumberInput(self.id + '-amount', 'Amount').createInputDom()
                        .find("input");
                    var $amountDiv = $('<div class="col-xs-4">');
                    $amountDiv.append($amountInput);
                    $wrapperRow.append($amountDiv);
                    $inputRoot.append($wrapperRow);
                }
                else
                {
                    var $inputDiv = createListInputDiv(self.id, self.values);
                    $inputRoot.append($inputDiv);
                }
            }
        }
        else
        {
            if (self.hasAmount)
            {
                var $wrapperRow = createWrapperRowDiv();

                // add selection
                var $select = createSelect(self.id, self.values, false);
                // make select smaller to fit the add button if this is multiselect
                var selectWidth = (self.multiSelect) ? 5 : 8;
                var $selectDiv = $('<div class="col-xs-' + selectWidth + '">');
                $selectDiv.append($select);
                $wrapperRow.append($selectDiv);

                // add amount
                var $amountInput = new NumberInput(self.id + '-amount', 'Amount').createInputDom()
                    .find("input");
                var $amountDiv = $('<div class="col-xs-4">');
                $amountDiv.append($amountInput);
                $wrapperRow.append($amountDiv);

                if (self.multiSelect)
                {
                    // create dom list to hold added items
                    var $selectedList = $('<ul class="list-group">');
                    $inputRoot.append($selectedList);

                    var $btnDiv = createListItemAddButton(3, $selectedList, [$select, $amountInput]);
                    $wrapperRow.append($btnDiv);
                }

                $inputRoot.append($wrapperRow);
            }
            else
            {
                $inputRoot.append(createSelect(self.id, self.values, self.multiSelect));
            }
        }

        // return the new input dom
        return $inputRoot;
    };

    function NumberInput(id, alternateDisplayTitle, min, max, isDecimal)
    {
        validateId(id);
        this.id = id;
        min = parseInt(min);
        this.min = (isNaN(min)) ? null : min;
        max = parseInt(max);
        this.max = (isNaN(max)) ? null : max;
        this.isDecimal = isDecimal || false;
        this.alternateDisplayTitle = alternateDisplayTitle || null;
    }
    NumberInput.prototype.createInputDom = function()
    {
        var $inputRoot = createInputBase(this.alternateDisplayTitle, this.id);
        var $numberInput = $('<input type="number">');
        applyInputAttributes($numberInput, this.id);

        var min = this.min;
        var hasMin = min != null;
        var max = this.max;
        var hasMax = max != null;
        var isInteger = !this.isDecimal;
        if (hasMin)
        {
            $numberInput.attr("min", min);
        }
        if (hasMax)
        {
            $numberInput.attr("max", max);
        }

        // add a input change listener to enforce the constraints on the number input
        $numberInput.change(function()
        {
            var val = $(this).val();
            val = (hasMin) ? Math.max(min, val) : val;
            val = (hasMax) ? Math.min(max, val) : val;
            val = (isInteger) ? Math.round(val) : val;
            $(this).val(val);
        });

        $inputRoot.append($numberInput);
        return $inputRoot;
    };

    function SmallTextInput(id, alternateDisplayTitle, placeholderText)
    {
        validateId(id);
        this.id = id;
        this.alternateDisplayTitle = alternateDisplayTitle || null;
        this.placeholderText = placeholderText || "";
    }
    SmallTextInput.prototype.createInputDom = function()
    {
        var $inputRoot = createInputBase(this.hideLabel, this.alternateDisplayTitle, this.id);
        var $textInput = $('<input type="text">');
        applyInputAttributes($textInput, this.id, this.placeholderText);
        $inputRoot.append($textInput);
        return $inputRoot;
    };

    function LargeTextInput(id, alternateDisplayTitle, placeholderText, numRows)
    {
        validateId(id);
        this.id = id;
        this.alternateDisplayTitle = alternateDisplayTitle || null;
        this.placeholderText = placeholderText || "";
        var intRows = parseInt(numRows);
        this.numRows = (!isNaN(intRows) && intRows >= 1) ? intRows : 3;
    }
    LargeTextInput.prototype.createInputDom = function()
    {
        var $inputRoot = createInputBase(this.alternateDisplayTitle, this.id);
        var $textInput = $('<textarea rows="' + this.numRows + '">');
        applyInputAttributes($textInput, this.id, this.placeholderText);
        $inputRoot.append($textInput);
        return $inputRoot;
    };

    // Maybe, to make this a generic input, this should be a multi input or an input group somehow?
    // an attack could then be a list input for the weapon, number input for attack, number input for the crit range, number input for the damage, and maybe a new dice input
    // Then a full attack could be a grouping of this attack input grouping
    function FullAttackInput(id /* TODO */ )
    {
        // TODO
    }
    FullAttackInput.prototype.createInputDom = function()
    {
        // TODO
    };

    // add create methods to the return object so that the return object can be used to create input
    // types like so "var enum = StatInputFactory.createEnumInput(...);"
    // using bind.apply and passing in the constructor name and the arguments variable allows us
    // to not have to have the arguments in these functions. The calling code just calls these
    // functions with the arguments of the actual constructor.
    function callConstructor(constructor)
    {
        var factoryFunction = constructor.bind.apply(constructor, arguments);
        return new factoryFunction();
    }
    return {
        createListInput: callConstructor.bind(null, ListInput),
        createNumberInput: callConstructor.bind(null, NumberInput),
        createSmallTextInput: callConstructor.bind(null, SmallTextInput),
        createLargeTextInput: callConstructor.bind(null, LargeTextInput),
        createFullAttackInput: callConstructor.bind(null, FullAttackInput)
    };
})();