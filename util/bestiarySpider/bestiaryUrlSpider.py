import scrapy

#Grabs all the monsters listed in the bestiary sorted by CR on d20pfsrd and
#stores their information in a .json file, which can be easily modified into a csv
#with your favorite text editor to upload to a database
#to run: scrapy runspider bestiaryUrlScraper.py -o bestiary.json
class BestiarySpider(scrapy.Spider):
    name = 'd20pfsrd'
    start_urls = ['http://www.d20pfsrd.com/bestiary/-bestiary-by-challenge-rating']

    def parse(self, response):
        #Grab list of URLS that contains hrefs to different CR categories
        urlsByCr = response.selector.xpath('//*[@id="sites-toc-undefined"]/div/ul').xpath('.//a/@href').extract() 
        for href in urlsByCr:
            href = 'http://www.d20pfsrd.com' + href
            yield scrapy.Request(href, callback=self.parse_cr_list)

    def parse_cr_list(self, response):
            monsterContainer = response.selector.xpath('//*[@id="sites-canvas-main-content"]')
            #this ignores the 3PP external website link, but will still scrape 3PP data from its monster link
            monsterUrls = monsterContainer.xpath('.//a[not(contains(text(), \'3PP\')) and not(contains(text(),\'Back to Top\'))]/@href').extract()
            for href in monsterUrls:
                yield scrapy.Request(href, callback=self.parse_monster_page)

    def parse_monster_page(self, response):
        name = response.selector.xpath('//*[@id=\"sites-page-title\"]/text()').extract();
        yield {
            'url': response.url,
            'name' : str(name),
        }
