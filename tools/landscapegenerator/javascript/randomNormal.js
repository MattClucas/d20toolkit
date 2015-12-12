/* -------------------------------------------------------------------------
 * The generator used in this library is a so-called 'Lehmer random number
 * generator' which returns a pseudo-random number uniformly distributed
 * between 0.0 and 1.0.  The period is (m - 1) where m = 2,147,483,647 and
 * the smallest and largest possible values are (1 / m) and 1 - (1 / m)
 * respectively.  For more details see:
 *
 *       "Random Number Generators: Good Ones Are Hard To Find"
 *                   Steve Park and Keith Miller
 *              Communications of the ACM, October 1988
 *
 * Note that as of 7-11-90 the multiplier used in this library has changed
 * from the previous "minimal standard" 16807 to a new value of 48271.  To
 * use this library in its old (16807) form change the constants MULTIPLIER
 * and CHECK as indicated in the comments.
 *
 * Name              : Rng.java  (Random Number Generation - Single Stream)
 * Authors           : Steve Park & Dave Geyer
 * Translated by     : Jun Wang & Richard Dutton
 * Language          : Java
 * Latest Revision   : 6-10-04
 *
 * Translated by Jacob Moyer to JavaScript.
 * -------------------------------------------------------------------------
 */
const MODULUS = 2147483647; // DON'T CHANGE THIS VALUE
function Rng(seed) {
    // Rng is either seeded with something or use the current time
    // Mod time by MODULUS to make sure it doesnt go over
    if (seed > 0) {
        this.seed = seed;
    } else {
        this.seed = Math.max(Date.now() % MODULUS, 1);
        document.getElementById("seed").value = this.seed;
    }

    console.log("Seed:" + this.seed);
}

Rng.prototype.MODULUS = MODULUS;
Rng.prototype.MULTIPLIER = 48271; /* use 16807 for the "minimal standard"      */
Rng.prototype.CHECK = 399268537; /* use 1043616065 for the "minimal standard" */

/* ---------------------------------------------------------------------
 * Random is a Lehmer generator that returns a pseudo-random real number
 * uniformly distributed between 0.0 and 1.0.  The period is (m - 1)
 * where m = 2,147,483,647 amd the smallest and largest possible values
 * are (1 / m) and 1 - (1 / m) respectively.
 * ---------------------------------------------------------------------
 */
Rng.prototype.random = function() {
    var Q = Math.floor(this.MODULUS / this.MULTIPLIER);
    var R = this.MODULUS % this.MULTIPLIER;

    var t = this.MULTIPLIER * (this.seed % Q) - R * Math.floor(this.seed / Q);
    if (t > 0) {
        this.seed = t;
    } else {
        this.seed = t + this.MODULUS;
    }
    return this.seed * 1.0 / this.MODULUS;
}

/* -------------------------------------------------------------------
 * Use this (optional) procedure to test for a correct implementation.
 * -------------------------------------------------------------------
 */
Rng.prototype.testRandom = function() {
    this.seed = 1; /* set initial state to 1 */
    for (var i = 0; i < 10000; i++) {
        this.random();
    }
    if (this.seed == this.CHECK) {
        console.log("\n The implementation of Random is correct");
    } else {
        console.log("\n ERROR - the implementation of Random is not correct");
    }
}

var RNG_INSTANCE = new Rng(SEED);

/* ========================================================================
 * Returns a normal (Gaussian) distributed real number.
 * NOTE: use stndev > 0.0
 *
 * Uses a very accurate approximation of the normal idf due to Odeh & Evans,
 * J. Applied Statistics, 1974, vol 23, pp 96-97.
 * ========================================================================
 */
// DO NOT TOUCH THESE MAGIC CONSTANTS
const P0 = 0.322232431088;
const P1 = 1.0;
const P2 = 0.342242088547;
const P3 = 0.204231210245e-1;
const P4 = 0.453642210148e-4;

const Q0 = 0.099348462606;
const Q1 = 0.588581570495;
const Q2 = 0.531103462366;
const Q3 = 0.103537752850;
const Q4 = 0.385607006340e-2;

function randomNormal(mean, stndev) {
    var u = RNG_INSTANCE.random();
    if (u < 0.5) {
        var t = Math.sqrt(-2.0 * Math.log(u));
    } else {
        var t = Math.sqrt(-2.0 * Math.log(1.0 - u));
    }
    var p = P0 + t * (P1 + t * (P2 + t * (P3 + t * P4)));
    var q = Q0 + t * (Q1 + t * (Q2 + t * (Q3 + t * Q4)));
    if (u < 0.5) {
        var z = p / q - t;
    } else {
        var z = t - p / q;
    }

    return mean + stndev * z;
}
