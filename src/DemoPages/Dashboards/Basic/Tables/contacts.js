import React from 'react';
import { Table } from 'reactstrap';


const contacts = [
    {
        "total": 80,
        "count": 20,
        "query": {
          "company.gid__in": [
            "585b626d15268141b808bf29"
          ],
          "_limit": 20
        },
        "_meta": {
          "total": 80,
          "took": 1,
          "doc_types": [
            "person"
          ],
          "alias": {
            "2019_10_17_pt169155962_52707.person": {
              "aliases": {
                "person": {}
              }
            }
          },
          "acl_rules": {
            "_all": {
              "companies": {
                "update": {
                  "_search": "(source.names:equifax AND industries.industry_type:traded AND (metrics.global_employees:>10 OR metrics.global_revenue:>1000000)) OR (source.names:equifax AND NOT industries.industry_type:traded AND NOT roles:branch AND metrics.global_employees:>50) OR (NOT source.names:equifax)"
                }
              }
            }
          }
        },
        "data": [
          {
            "_score": 0,
            "last_name": "Wang",
            "job_title_keywords": [
              "manager"
            ],
            "id": "5b3d5bc033c59c141ce3a18a",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/hcbip8cpz6dnfb24apcy",
            "full_name": "Zhen Wang",
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "person_id": "126b321f-a70f-4d92-b0fd-238a5e0fcddc",
                "id_name": "uuid",
                "id": "126b321f-a70f-4d92-b0fd-238a5e0fcddc",
                "primary_affiliation_title": "Data Science Manager",
                "permalink": "zhen-wang-cddc",
                "updated_at": "2018-05-03T12:49:37",
                "primary_affiliation_organization": "Wayfair",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "created_at": "2018-05-02T18:26:48",
                "fields": [
                  "company",
                  "photo",
                  "social",
                  "last_name",
                  "job_title",
                  "first_name"
                ],
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "job_id": "66b5f540-3b2a-4f65-9cc5-d1ca67c6d1e1",
                "name": "crunchbase"
              }
            },
            "company": {
              "n": {
                "domain": "wayfair.com",
                "url": "wayfair.com",
                "name": "WAYFAIR"
              },
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              }
            },
            "person_uuid": "126b321f-a70f-4d92-b0fd-238a5e0fcddc",
            "job_title": "Data Science Manager",
            "created_at": "2019-02-16T20:37:57.441550",
            "started_on": "2016-11-01T00:00:00",
            "social": {
              "linkedin": {
                "url": "https://www.linkedin.com/in/jenzhenwang/",
                "handle": "in/jenzhenwang"
              },
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/zhen-wang-cddc",
                "handle": "person/zhen-wang-cddc"
              },
              "source": "crunchbase"
            },
            "is_current": "t",
            "address": {
              "state": {
                "code": "MA"
              },
              "country": {
                "code": "USA"
              },
              "city": "Boston"
            },
            "updated_at": "2019-10-05T21:37:11.428037",
            "first_name": "Zhen",
            "pid": "585b626d15268141b808bf29:Zhen Wang",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Zhen Wang",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5bc033c59c141ce3a18a"
          },
          {
            "id": "5b9c41b9c8fcf57bdc398235",
            "last_name": "Jung",
            "pid": "585b626d15268141b808bf29:Andrea Jung",
            "first_name": "Andrea",
            "company": {
              "gid": "585b626d15268141b808bf29"
            },
            "_score": 0,
            "source": {
              "lexisnexis": {
                "person_id": "7461425",
                "title_type": "D",
                "company_id": "2388175",
                "name": "lexisnexis",
                "board_ind": "Y",
                "chairman_ind": "N",
                "updated_at": "2018-07-13T00:00:00"
              },
              "names": [
                "lexisnexis"
              ]
            },
            "full_name": "Andrea Jung",
            "updated_at": "2019-03-26T21:02:41.024000",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Andrea Jung",
            "self": "http://api.gazelle.ai/api/people?id=5b9c41b9c8fcf57bdc398235"
          },
          {
            "first_name": "James",
            "source": {
              "names": [
                "lexisnexis"
              ],
              "lexisnexis": {
                "title_type": "D",
                "person_id": "7142976",
                "name": "lexisnexis",
                "chairman_ind": "N",
                "company_id": "2388175",
                "board_ind": "Y",
                "updated_at": "2018-07-13T00:00:00"
              }
            },
            "pid": "585b626d15268141b808bf29:James R. Miller",
            "updated_at": "2019-03-26T21:02:41.052000",
            "full_name": "James R. Miller",
            "last_name": "Miller",
            "middle_name": "R.",
            "company": {
              "gid": "585b626d15268141b808bf29"
            },
            "_score": 0,
            "id": "5b9c4161c8fcf57b7e9946b2",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:James R. Miller",
            "self": "http://api.gazelle.ai/api/people?id=5b9c4161c8fcf57b7e9946b2"
          },
          {
            "_score": 0,
            "last_name": "Chung",
            "id": "5b3d5d9c33c59c14c18c1907",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1493925943/gqw7l05cx2eee7n6bdrl.jpg",
            "full_name": "Junhee Chung",
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "person_id": "900183d6-5f89-e884-b551-ddc37cf45810",
                "id_name": "uuid",
                "id": "900183d6-5f89-e884-b551-ddc37cf45810",
                "primary_affiliation_title": "Managing Editor",
                "permalink": "junhee-chung",
                "updated_at": "2018-02-12T23:40:37",
                "primary_affiliation_organization": "Wayfair",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "created_at": "2013-06-07T08:56:36",
                "fields": [
                  "first_name",
                  "last_name",
                  "company",
                  "photo",
                  "social",
                  "job_title"
                ],
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "job_id": "170fe35c-deb0-dba4-6653-661290854a72",
                "name": "crunchbase"
              }
            },
            "company": {
              "n": {
                "domain": "wayfair.com",
                "url": "wayfair.com",
                "name": "WAYFAIR"
              },
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              }
            },
            "person_uuid": "900183d6-5f89-e884-b551-ddc37cf45810",
            "job_title": "Managing Editor",
            "created_at": "2019-02-16T20:37:57.906092",
            "started_on": "2014-01-01T00:00:00",
            "gender": "male",
            "social": {
              "linkedin": {
                "url": "http://www.linkedin.com/pub/junhee-chung/38/719/837",
                "handle": "pub/junhee-chung/38/719/837"
              },
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/junhee-chung",
                "handle": "person/junhee-chung"
              },
              "source": "crunchbase"
            },
            "is_current": "t",
            "updated_at": "2019-10-11T17:24:15.119366",
            "first_name": "Junhee",
            "pid": "585b626d15268141b808bf29:Junhee Chung",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Junhee Chung",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5d9c33c59c14c18c1907"
          },
          {
            "gender": "male",
            "social": {
              "twitter": {
                "handle": "teixeirapedro",
                "url": "https://www.twitter.com/teixeirapedro"
              },
              "source": "crunchbase",
              "crunchbase": {
                "handle": "person/pedro-teixeira-2",
                "url": "https://www.crunchbase.com/person/pedro-teixeira-2"
              },
              "linkedin": {
                "handle": "in/pedroteixeiraferraz",
                "url": "https://de.linkedin.com/in/pedroteixeiraferraz"
              }
            },
            "last_name": "Teixeira",
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "primary_affiliation_title": "Senior Engineering Manager",
                "name": "crunchbase",
                "fields": [
                  "photo",
                  "social",
                  "last_name",
                  "job_title",
                  "first_name",
                  "company"
                ],
                "id": "153ad65c-c9a4-d387-ad5f-82d87f07a416",
                "job_id": "66e7b60d-f39b-48eb-be58-ea5b5316a222",
                "primary_affiliation_organization": "Wayfair",
                "updated_at": "2019-02-04T07:07:20",
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "created_at": "2016-05-17T08:34:40",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "id_name": "uuid",
                "permalink": "pedro-teixeira-2",
                "person_id": "153ad65c-c9a4-d387-ad5f-82d87f07a416"
              }
            },
            "id": "5c6a10920f86c44202dc2ede",
            "job_title": "Senior Engineering Manager",
            "updated_at": "2019-10-11T17:25:41.040886",
            "job_title_keywords": [
              "manager"
            ],
            "address": {
              "country": {
                "code": "DEU"
              },
              "city": "Berlin"
            },
            "company": {
              "gid": "585b626d15268141b808bf29",
              "n": {
                "domain": "wayfair.com",
                "name": "WAYFAIR",
                "url": "wayfair.com"
              },
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              }
            },
            "person_uuid": "153ad65c-c9a4-d387-ad5f-82d87f07a416",
            "is_current": "t",
            "_score": 0,
            "first_name": "Pedro",
            "pid": "585b626d15268141b808bf29:Pedro Teixeira",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/c2utj3lvyztjnqpyad1t",
            "created_at": "2019-02-18T01:39:06.970000",
            "full_name": "Pedro Teixeira",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Pedro Teixeira",
            "self": "http://api.gazelle.ai/api/people?id=5c6a10920f86c44202dc2ede"
          },
          {
            "last_name": "Wood",
            "started_on": "2012-01-01T00:00:00",
            "ended_on": "2017-07-01T00:00:00",
            "first_name": "Jack",
            "source": {
              "crunchbase": {
                "fields": [
                  "first_name",
                  "company",
                  "last_name",
                  "photo",
                  "social",
                  "job_title"
                ],
                "created_at": "2015-06-11T04:47:19",
                "updated_at": "2018-02-12T23:58:51",
                "person_id": "f36b9ef8-8c4e-188a-589c-ae27cf0c8e41",
                "id_name": "uuid",
                "primary_affiliation_organization": "Wayfair",
                "name": "crunchbase",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "permalink": "jack-wood",
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "primary_affiliation_title": "Chief Information Officer, Head of International Engineering",
                "job_id": "3113c938-8547-3b0f-64cc-d662d99ebbc7",
                "id": "f36b9ef8-8c4e-188a-589c-ae27cf0c8e41"
              },
              "names": [
                "crunchbase"
              ]
            },
            "social": {
              "crunchbase": {
                "handle": "person/jack-wood",
                "url": "https://www.crunchbase.com/person/jack-wood"
              },
              "source": "crunchbase",
              "linkedin": {
                "handle": "pub/jack-wood/1/936/33",
                "url": "https://www.linkedin.com/pub/jack-wood/1/936/33"
              }
            },
            "updated_at": "2019-10-11T17:28:18.272912",
            "job_title_keywords": [
              "executive",
              "cio"
            ],
            "created_at": "2019-02-16T20:37:58.343977",
            "gender": "male",
            "job_title": "Chief Information Officer, Head of International Engineering",
            "full_name": "Jack Wood",
            "person_uuid": "f36b9ef8-8c4e-188a-589c-ae27cf0c8e41",
            "_score": 0,
            "pid": "585b626d15268141b808bf29:Jack Wood",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1433998031/r1va6hxter4gambtcgnh.jpg",
            "company": {
              "n": {
                "domain": "wayfair.com",
                "name": "WAYFAIR",
                "url": "wayfair.com"
              },
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              }
            },
            "is_current": "f",
            "id": "5c2a7d4b0f86c4d9f00d8a1d",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Jack Wood",
            "self": "http://api.gazelle.ai/api/people?id=5c2a7d4b0f86c4d9f00d8a1d"
          },
          {
            "last_name": "Whitman",
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "name": "crunchbase",
                "permalink": "sarah-dignan-whitman",
                "primary_affiliation_title": "Vice President of AllModern and Wayfair Supply",
                "job_id": "3de0b92a-8f33-9581-f1b7-10169757988f",
                "id": "16519a87-32fd-8da8-dfb4-08d808752298",
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "id_name": "uuid",
                "person_id": "16519a87-32fd-8da8-dfb4-08d808752298",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "primary_affiliation_organization": "Wayfair",
                "created_at": "2014-09-25T11:19:13",
                "fields": [
                  "company",
                  "social",
                  "job_title",
                  "first_name",
                  "last_name",
                  "photo"
                ],
                "updated_at": "2018-02-13T00:00:00"
              }
            },
            "pid": "585b626d15268141b808bf29:Sarah Dignan Whitman",
            "person_uuid": "16519a87-32fd-8da8-dfb4-08d808752298",
            "job_title": "Vice President of AllModern and Wayfair Supply",
            "first_name": "Sarah Dignan",
            "_score": 0,
            "company": {
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              },
              "n": {
                "url": "wayfair.com",
                "name": "WAYFAIR",
                "domain": "wayfair.com"
              }
            },
            "gender": "female",
            "full_name": "Sarah Dignan Whitman",
            "job_title_keywords": [
              "vice president",
              "vp"
            ],
            "address": {
              "state": {
                "code": "MA"
              },
              "city": "Boston",
              "country": {
                "code": "USA"
              }
            },
            "social": {
              "facebook": {
                "handle": "sarah.dignan.5",
                "url": "http://www.facebook.com/sarah.dignan.5"
              },
              "source": "crunchbase",
              "linkedin": {
                "handle": "profile/view",
                "url": "http://www.linkedin.com/profile/view?id=571015"
              },
              "crunchbase": {
                "handle": "person/sarah-dignan-whitman",
                "url": "https://www.crunchbase.com/person/sarah-dignan-whitman"
              }
            },
            "created_at": "2019-02-16T20:37:57.690815",
            "id": "5b3d5cee33c59c1493e3ac4e",
            "is_current": "t",
            "updated_at": "2019-10-11T17:27:04.017265",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1411643945/kroyegsuzqtmcoflo1cv.jpg",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Sarah Dignan Whitman",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5cee33c59c1493e3ac4e"
          },
          {
            "first_name": "Brian",
            "updated_at": "2019-03-26T21:02:41.390000",
            "company": {
              "created_at": "2018-03-12T00:00:00",
              "n": {
                "url": "wayfair.com",
                "domain": "wayfair.com",
                "name": "WAYFAIR"
              },
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              },
              "gid": "585b626d15268141b808bf29"
            },
            "person_uuid": "e54e6ab5-0fce-b032-290a-633d5521edba",
            "id": "5b3d5c6333c59c1455e3b07f",
            "source": {
              "crunchbase": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "updated_at": "2018-03-12T20:45:22",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "primary_affiliation_title": "Vice President of Lifestyle Brands",
                "job_id": "a2ddcddc-3037-9bc6-9394-e2b8009d43c5",
                "person_id": "e54e6ab5-0fce-b032-290a-633d5521edba",
                "created_at": "2014-09-25T11:10:50",
                "name": "crunchbase"
              },
              "names": [
                "crunchbase"
              ]
            },
            "gender": "male",
            "full_name": "Brian Thornfeldt",
            "is_current": "t",
            "_score": 0,
            "job_title_keywords": [
              "president",
              "vice president",
              "vp"
            ],
            "social": {
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/brian-thornfeldt",
                "handle": "person/brian-thornfeldt"
              },
              "source": "crunchbase",
              "facebook": {
                "url": "http://www.facebook.com/bthornfeldt",
                "handle": "bthornfeldt"
              },
              "linkedin": {
                "url": "http://www.linkedin.com/profile/view?id=34469492",
                "handle": "profile/view"
              }
            },
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1411643435/am9scqfhbwteobp3hcze.jpg",
            "address": {
              "subregion": {
                "code": "021",
                "name": "Northern America"
              },
              "state": {
                "code": "MA"
              },
              "source": "crunchbase",
              "city": "Wayland",
              "location": "Wayland, United States",
              "region": {
                "code": "019",
                "name": "Americas"
              },
              "lid": "US:::Wayland:",
              "country": {
                "code": "US",
                "name": "United States"
              }
            },
            "pid": "585b626d15268141b808bf29:Brian Thornfeldt",
            "job_title": "Vice President of Lifestyle Brands",
            "last_name": "Thornfeldt",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Brian Thornfeldt",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5c6333c59c1455e3b07f"
          },
          {
            "source": {
              "lexisnexis": {
                "chairman_ind": "N",
                "board_ind": "N",
                "updated_at": "2018-03-02T00:00:00",
                "title_type": "B",
                "company_id": "2388175",
                "person_id": "5263805",
                "name": "lexisnexis"
              },
              "names": [
                "lexisnexis"
              ]
            },
            "job_title": "Chief Product & Mktg Officer",
            "id": "5b9c4193c8fcf57bbf3b7d1f",
            "full_name": "Edmond Macri",
            "first_name": "Edmond",
            "pid": "585b626d15268141b808bf29:Edmond Macri",
            "updated_at": "2019-03-26T21:02:41.024000",
            "company": {
              "gid": "585b626d15268141b808bf29"
            },
            "last_name": "Macri",
            "_score": 0,
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Edmond Macri",
            "self": "http://api.gazelle.ai/api/people?id=5b9c4193c8fcf57bbf3b7d1f"
          },
          {
            "updated_at": "2019-03-26T21:02:41.052000",
            "id": "5b9c4124c8fcf57b17fb91d3",
            "full_name": "Margaret Lawrence",
            "company": {
              "gid": "585b626d15268141b808bf29"
            },
            "source": {
              "lexisnexis": {
                "board_ind": "N",
                "person_id": "7251875",
                "name": "lexisnexis",
                "updated_at": "2018-03-02T00:00:00",
                "company_id": "2388175",
                "title_type": "B",
                "chairman_ind": "N"
              },
              "names": [
                "lexisnexis"
              ]
            },
            "pid": "585b626d15268141b808bf29:Margaret Lawrence",
            "last_name": "Lawrence",
            "_score": 0,
            "first_name": "Margaret",
            "job_title": "Vp-Professional",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Margaret Lawrence",
            "self": "http://api.gazelle.ai/api/people?id=5b9c4124c8fcf57b17fb91d3"
          },
          {
            "address": {
              "country": {
                "code": "US",
                "name": "United States"
              },
              "lid": "US:NY:36061:New York:",
              "subregion": {
                "code": "021",
                "name": "Northern America"
              },
              "location": "New York, New York, New York, United States",
              "state": {
                "code": "NY"
              },
              "admin2": {
                "fips": "36061",
                "code": "36061",
                "name": "New York",
                "admin_type": "county"
              },
              "admin0": {
                "region": "Northeast",
                "division": "Middle Atlantic"
              },
              "source": "crunchbase",
              "city": "New York",
              "region": {
                "code": "019",
                "name": "Americas"
              },
              "admin1": {
                "fips": "36",
                "code": "NY",
                "name": "New York",
                "admin_type": "state"
              }
            },
            "last_name": "Lemieux",
            "company": {
              "created_at": "2018-03-12T00:00:00",
              "n": {
                "domain": "wayfair.com",
                "name": "WAYFAIR",
                "url": "wayfair.com"
              },
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              }
            },
            "first_name": "Christiane",
            "source": {
              "crunchbase": {
                "created_at": "2014-09-25T10:14:52",
                "updated_at": "2018-02-12T22:20:42",
                "person_id": "ac643c8d-d929-8113-7d0f-218203b5f249",
                "name": "crunchbase",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "primary_affiliation_title": "Executive Creative Director",
                "job_id": "d6e6156a-7139-517d-546f-3da6e786cacf"
              },
              "names": [
                "crunchbase"
              ]
            },
            "social": {
              "crunchbase": {
                "handle": "person/christiane-lemieux",
                "url": "https://www.crunchbase.com/person/christiane-lemieux"
              },
              "facebook": {
                "handle": "clemieux",
                "url": "http://www.facebook.com/clemieux"
              },
              "twitter": {
                "handle": "clemieux",
                "url": "http://twitter.com/clemieux"
              },
              "source": "crunchbase",
              "linkedin": {
                "handle": "in/christiane-lemieux-3b940721",
                "url": "https://www.linkedin.com/in/christiane-lemieux-3b940721/"
              }
            },
            "updated_at": "2019-03-26T21:02:41.474000",
            "job_title_keywords": [
              "cto",
              "executive",
              "director"
            ],
            "gender": "female",
            "job_title": "Executive Creative Director",
            "full_name": "Christiane Lemieux",
            "person_uuid": "ac643c8d-d929-8113-7d0f-218203b5f249",
            "_score": 0,
            "pid": "585b626d15268141b808bf29:Christiane Lemieux",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1411640076/frlt685vdurcueh4aim6.jpg",
            "is_current": "t",
            "id": "5b3d5beb33c59c1431c8fe96",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Christiane Lemieux",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5beb33c59c1431c8fe96"
          },
          {
            "is_current": "t",
            "social": {
              "linkedin": {
                "url": "https://www.linkedin.com/in/ian-lane-0b42b6",
                "handle": "in/ian-lane-0b42b6"
              },
              "source": "crunchbase",
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/ian-lane",
                "handle": "person/ian-lane"
              }
            },
            "_score": 0,
            "pid": "585b626d15268141b808bf29:Ian Lane",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1460403494/paqsbwrrfqjwlek1sjqn.png",
            "id": "5b3d5c5833c59c14458c0d4d",
            "started_on": "2011-06-01T00:00:00",
            "address": {
              "state": {
                "code": "MA"
              },
              "subregion": {
                "code": "021",
                "name": "Northern America"
              },
              "city": "Boston",
              "country": {
                "code": "US",
                "name": "United States"
              },
              "source": "crunchbase",
              "region": {
                "code": "019",
                "name": "Americas"
              },
              "lid": "US:::Boston:",
              "location": "Boston, United States"
            },
            "job_title_keywords": [
              "cto",
              "executive",
              "board member",
              "director"
            ],
            "updated_at": "2019-03-26T21:02:41.390000",
            "first_name": "Ian",
            "last_name": "Lane",
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "job_id": "b48ca406-5dc7-27aa-6113-3fc6fcf63ce3",
                "updated_at": "2018-02-12T23:23:54",
                "primary_affiliation_title": "Principal",
                "created_at": "2013-09-16T10:59:52",
                "name": "crunchbase",
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "primary_organization_uuid": "5bac8053-1e17-adc6-05e2-d936c1fc8e5d",
                "person_id": "e213c109-7446-5bf4-0453-bfa581ed7bb0"
              }
            },
            "gender": "male",
            "full_name": "Ian Lane",
            "job_title": "Member of the Board of Directors",
            "company": {
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              },
              "created_at": "2018-03-12T00:00:00",
              "gid": "585b626d15268141b808bf29",
              "n": {
                "domain": "wayfair.com",
                "name": "WAYFAIR",
                "url": "wayfair.com"
              }
            },
            "person_uuid": "e213c109-7446-5bf4-0453-bfa581ed7bb0",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Ian Lane",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5c5833c59c14458c0d4d"
          },
          {
            "is_current": "t",
            "social": {
              "linkedin": {
                "url": "https://www.linkedin.com/in/julie-bradley-3299551",
                "handle": "in/julie-bradley-3299551"
              },
              "source": "crunchbase",
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/julie-m-b-bradely",
                "handle": "person/julie-m-b-bradely"
              }
            },
            "_score": 0,
            "pid": "585b626d15268141b808bf29:Julie Bradely",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1397184783/c3b027bd0f02867511bfab6678a85ba6.jpg",
            "id": "5b3d5ce633c59c147f39ae69",
            "started_on": "2012-09-01T00:00:00",
            "address": {
              "state": {
                "code": "MA"
              },
              "subregion": {
                "code": "021",
                "name": "Northern America"
              },
              "city": "Boston",
              "country": {
                "code": "US",
                "name": "United States"
              },
              "source": "crunchbase",
              "region": {
                "code": "019",
                "name": "Americas"
              },
              "lid": "US:::Boston:",
              "location": "Boston, United States"
            },
            "job_title_keywords": [
              "cto",
              "executive",
              "board member",
              "director"
            ],
            "updated_at": "2019-03-26T21:02:41.249000",
            "first_name": "Julie",
            "last_name": "Bradely",
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "job_id": "7cda42b5-7736-bf7f-1354-c15dcb65ab9a",
                "updated_at": "2018-02-12T23:40:52",
                "primary_affiliation_title": "Member of the Board of Directors",
                "created_at": "2013-06-30T15:05:52",
                "name": "crunchbase",
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "person_id": "bc7e1542-e71b-8b89-ef3e-789665da38d5"
              }
            },
            "gender": "female",
            "full_name": "Julie Bradely",
            "job_title": "Member of the Board of Directors",
            "company": {
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              },
              "created_at": "2018-03-12T00:00:00",
              "gid": "585b626d15268141b808bf29",
              "n": {
                "domain": "wayfair.com",
                "name": "WAYFAIR",
                "url": "wayfair.com"
              }
            },
            "person_uuid": "bc7e1542-e71b-8b89-ef3e-789665da38d5",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Julie Bradely",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5ce633c59c147f39ae69"
          },
          {
            "id": "5b9c41d1c8fcf57bcd3cbd26",
            "last_name": "Conine",
            "pid": "585b626d15268141b808bf29:Steven K. Conine",
            "first_name": "Steven",
            "company": {
              "gid": "585b626d15268141b808bf29"
            },
            "_score": 0,
            "source": {
              "lexisnexis": {
                "person_id": "5263804",
                "title_type": "B,D",
                "company_id": "2388175",
                "name": "lexisnexis",
                "board_ind": "Y",
                "chairman_ind": "Y",
                "updated_at": "2018-08-02T00:00:00"
              },
              "names": [
                "lexisnexis"
              ]
            },
            "updated_at": "2019-03-26T21:02:40.996000",
            "middle_name": "K.",
            "full_name": "Steven K. Conine",
            "job_title": "Co-Chm",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Steven K. Conine",
            "self": "http://api.gazelle.ai/api/people?id=5b9c41d1c8fcf57bcd3cbd26"
          },
          {
            "first_name": "Michael",
            "full_name": "Michael O’Hanlon",
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "primary_affiliation_title": "VP, Corporate & Business Development",
                "person_id": "277b4ccb-e1ca-be4a-6b84-07a9cd33c165",
                "primary_affiliation_organization": "Wayfair",
                "id_name": "uuid",
                "permalink": "michael-o-hanlon",
                "fields": [
                  "company",
                  "social",
                  "first_name",
                  "photo",
                  "job_title",
                  "last_name"
                ],
                "name": "crunchbase",
                "id": "277b4ccb-e1ca-be4a-6b84-07a9cd33c165",
                "updated_at": "2018-02-12T23:30:19",
                "created_at": "2015-12-20T09:47:01",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "job_id": "8758f6be-49b4-3a1f-e108-3a31b910865a"
              }
            },
            "job_title_keywords": [
              "vp",
              "vice president",
              "business"
            ],
            "last_name": "O’Hanlon",
            "created_at": "2019-02-16T20:37:56.698167",
            "_score": 0,
            "updated_at": "2019-10-11T17:21:00.078689",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1450604815/bf9xkm9ovdwyayyzxpkp.png",
            "gender": "male",
            "social": {
              "source": "crunchbase",
              "crunchbase": {
                "handle": "person/michael-o-hanlon",
                "url": "https://www.crunchbase.com/person/michael-o-hanlon"
              }
            },
            "company": {
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              },
              "n": {
                "url": "wayfair.com",
                "name": "WAYFAIR",
                "domain": "wayfair.com"
              }
            },
            "pid": "585b626d15268141b808bf29:Michael O’Hanlon",
            "id": "5b3d5c7b33c59c1470c8f456",
            "is_current": "t",
            "job_title": "VP, Corporate & Business Development",
            "person_uuid": "277b4ccb-e1ca-be4a-6b84-07a9cd33c165",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Michael O’Hanlon",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5c7b33c59c1470c8f456"
          },
          {
            "_score": 0,
            "last_name": "Dean",
            "job_title_keywords": [
              "manager"
            ],
            "id": "5c2a7d100f86c4d9fa59a581",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1423679311/ewdeyfmnj3nqjdbzxli6.jpg",
            "full_name": "John Dean",
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "person_id": "1bcc7762-cfc4-052b-ccfb-199f8258e91a",
                "id_name": "uuid",
                "id": "1bcc7762-cfc4-052b-ccfb-199f8258e91a",
                "primary_affiliation_title": "Manager, Pricing and Profitability",
                "permalink": "john-dean-2",
                "updated_at": "2018-06-30T15:10:49",
                "primary_affiliation_organization": "Wayfair",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "created_at": "2014-08-14T19:21:18",
                "fields": [
                  "last_name",
                  "company",
                  "photo",
                  "job_title",
                  "first_name",
                  "social"
                ],
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "job_id": "16a6b4ca-4ad5-4dda-861a-809b44138c38",
                "name": "crunchbase"
              }
            },
            "company": {
              "n": {
                "domain": "wayfair.com",
                "url": "wayfair.com",
                "name": "WAYFAIR"
              },
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              }
            },
            "person_uuid": "1bcc7762-cfc4-052b-ccfb-199f8258e91a",
            "job_title": "Manager, Pricing and Profitability",
            "created_at": "2019-02-16T20:37:58.563060",
            "started_on": "2015-05-04T00:00:00",
            "gender": "male",
            "social": {
              "linkedin": {
                "url": "https://www.linkedin.com/in/johnrdean/",
                "handle": "in/johnrdean"
              },
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/john-dean-2",
                "handle": "person/john-dean-2"
              },
              "source": "crunchbase"
            },
            "is_current": "t",
            "address": {
              "state": {
                "code": "MA"
              },
              "country": {
                "code": "USA"
              },
              "city": "Boston"
            },
            "updated_at": "2019-10-11T17:21:25.492624",
            "first_name": "John",
            "pid": "585b626d15268141b808bf29:John Dean",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:John Dean",
            "self": "http://api.gazelle.ai/api/people?id=5c2a7d100f86c4d9fa59a581"
          },
          {
            "last_name": "O'Hara",
            "ended_on": "2015-03-01T00:00:00",
            "social": {
              "linkedin": {
                "url": "http://www.linkedin.com/profile/view?id=314002193",
                "handle": "profile/view"
              },
              "source": "crunchbase",
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/mike-ohara-2",
                "handle": "person/mike-ohara-2"
              }
            },
            "job_title": "Vice President of Product Development",
            "full_name": "Mike O'Hara",
            "gender": "male",
            "job_title_keywords": [
              "vp",
              "vice president"
            ],
            "address": {
              "state": {
                "code": "MA"
              },
              "city": "Boston",
              "country": {
                "code": "USA"
              }
            },
            "company": {
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              },
              "n": {
                "url": "wayfair.com",
                "name": "WAYFAIR",
                "domain": "wayfair.com"
              }
            },
            "first_name": "Mike",
            "created_at": "2019-02-16T20:37:58.594188",
            "started_on": "2003-03-01T00:00:00",
            "pid": "585b626d15268141b808bf29:Mike O'Hara",
            "updated_at": "2019-10-11T17:22:28.792151",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1411641908/vnemyz3j7c8a4qtsvppa.jpg",
            "id": "5c2a7d680f86c4da738055b8",
            "_score": 0,
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "updated_at": "2018-02-13T00:00:14",
                "job_id": "049176d5-099a-9f5b-f5f4-d8ad3abe2bff",
                "id_name": "uuid",
                "id": "7c0fb06e-10f4-0362-9771-9aa3db273afa",
                "permalink": "mike-ohara-2",
                "fields": [
                  "photo",
                  "social",
                  "job_title",
                  "last_name",
                  "first_name",
                  "company"
                ],
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "created_at": "2014-09-25T10:45:11",
                "name": "crunchbase",
                "person_id": "7c0fb06e-10f4-0362-9771-9aa3db273afa"
              }
            },
            "person_uuid": "7c0fb06e-10f4-0362-9771-9aa3db273afa",
            "is_current": "f",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Mike O'Hara",
            "self": "http://api.gazelle.ai/api/people?id=5c2a7d680f86c4da738055b8"
          },
          {
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "primary_affiliation_title": "Head of Campus and Early Career Hiring",
                "person_id": "5a63f7b6-c289-4e62-9534-30f9a9233d27",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "permalink": "christopher-mannion",
                "id": "5a63f7b6-c289-4e62-9534-30f9a9233d27",
                "id_name": "uuid",
                "job_id": "94d9c74f-2fff-4993-8ed2-87e55db5f620",
                "name": "crunchbase",
                "fields": [
                  "first_name",
                  "last_name",
                  "photo",
                  "social",
                  "job_title",
                  "company"
                ],
                "primary_affiliation_organization": "Wayfair",
                "created_at": "2019-03-15T03:28:00",
                "updated_at": "2019-03-15T03:28:34"
              }
            },
            "_score": 0,
            "pid": "585b626d15268141b808bf29:Christopher Mannion",
            "last_name": "Mannion",
            "gender": "male",
            "job_title": "Head of Campus and Early Career Hiring",
            "first_name": "Christopher",
            "created_at": "2019-09-30T13:54:55.579314",
            "social": {
              "linkedin": {
                "url": "https://www.linkedin.com/in/cmmannion/",
                "handle": "in/cmmannion"
              },
              "source": "crunchbase",
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/christopher-mannion",
                "handle": "person/christopher-mannion"
              }
            },
            "full_name": "Christopher Mannion",
            "is_current": "t",
            "original_id": "5cc0c6400f86c45b80aa9536",
            "person_uuid": "5a63f7b6-c289-4e62-9534-30f9a9233d27",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/pdotow0mx5svaogipuzh",
            "id": "5cc266c10f86c47b0010b5c0",
            "company": {
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              },
              "n": {
                "name": "WAYFAIR",
                "domain": "wayfair.com",
                "url": "wayfair.com"
              }
            },
            "updated_at": "2019-10-11T17:22:36.818686",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Christopher Mannion",
            "self": "http://api.gazelle.ai/api/people?id=5cc266c10f86c47b0010b5c0"
          },
          {
            "last_name": "Vecellio",
            "first_name": "Nicholas",
            "job_title": "Monitoring Engineering",
            "full_name": "Nicholas Vecellio",
            "gender": "male",
            "address": {
              "state": {
                "code": "MA"
              },
              "city": "Allston",
              "country": {
                "code": "USA"
              }
            },
            "company": {
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              },
              "n": {
                "url": "wayfair.com",
                "name": "WAYFAIR",
                "domain": "wayfair.com"
              }
            },
            "social": {
              "linkedin": {
                "url": "https://www.linkedin.com/in/nicholas-vecellio-b103b632",
                "handle": "in/nicholas-vecellio-b103b632"
              },
              "source": "crunchbase",
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/nicholas-vecellio",
                "handle": "person/nicholas-vecellio"
              }
            },
            "created_at": "2019-02-16T20:37:57.659051",
            "pid": "585b626d15268141b808bf29:Nicholas Vecellio",
            "updated_at": "2019-10-11T17:22:16.970059",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/tafyxuj3dn6hzjukf8hl",
            "id": "5b3d5bca33c59c13d439b51b",
            "_score": 0,
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "id_name": "uuid",
                "updated_at": "2018-09-08T02:45:29",
                "primary_affiliation_organization": "Wayfair",
                "id": "5f0d9d8e-aa84-4f15-8a1a-db7ae5e6aba4",
                "permalink": "nicholas-vecellio",
                "fields": [
                  "social",
                  "job_title",
                  "photo",
                  "last_name",
                  "company",
                  "first_name"
                ],
                "primary_affiliation_title": "Monitoring Engineering",
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "job_id": "410ced11-5105-4900-96aa-4c97cac838f4",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "created_at": "2018-06-14T09:44:52",
                "name": "crunchbase",
                "person_id": "5f0d9d8e-aa84-4f15-8a1a-db7ae5e6aba4"
              }
            },
            "person_uuid": "5f0d9d8e-aa84-4f15-8a1a-db7ae5e6aba4",
            "is_current": "t",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Nicholas Vecellio",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5bca33c59c13d439b51b"
          },
          {
            "last_name": "Macri",
            "first_name": "Ed",
            "job_title": "Chief Product & Marketing Officer",
            "full_name": "Ed Macri",
            "gender": "male",
            "address": {
              "state": {
                "code": "MA"
              },
              "city": "Boston",
              "country": {
                "code": "USA"
              }
            },
            "company": {
              "gid": "585b626d15268141b808bf29",
              "source": {
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
              },
              "n": {
                "url": "wayfair.com",
                "name": "WAYFAIR",
                "domain": "wayfair.com"
              }
            },
            "social": {
              "facebook": {
                "url": "http://www.facebook.com/edmondmacri",
                "handle": "edmondmacri"
              },
              "source": "crunchbase",
              "crunchbase": {
                "url": "https://www.crunchbase.com/person/ed-macri",
                "handle": "person/ed-macri"
              },
              "twitter": {
                "url": "http://twitter.com/edmondmacri",
                "handle": "edmondmacri"
              }
            },
            "created_at": "2019-02-16T20:37:58.691625",
            "started_on": "2007-01-01T00:00:00",
            "pid": "585b626d15268141b808bf29:Ed Macri",
            "updated_at": "2019-10-11T17:23:13.038573",
            "photo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_jpg/v1411640295/rblqusfgbnvrhl1rvcj8.jpg",
            "id": "5b3d5d8933c59c14cdc90faf",
            "_score": 0,
            "source": {
              "names": [
                "crunchbase"
              ],
              "crunchbase": {
                "id_name": "uuid",
                "updated_at": "2018-02-13T00:01:23",
                "primary_affiliation_organization": "Wayfair",
                "id": "b5bd8930-99bf-25e9-40e6-4aa0df4c9700",
                "permalink": "ed-macri",
                "fields": [
                  "first_name",
                  "company",
                  "last_name",
                  "social",
                  "job_title",
                  "photo"
                ],
                "primary_affiliation_title": "Chief Product & Marketing Officer",
                "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "job_id": "3508bcf8-9f33-a33b-b54b-e1b598da695e",
                "primary_organization_uuid": "9a9bc749-457b-270a-8bbb-d3d771254be3",
                "created_at": "2014-09-25T10:18:24",
                "name": "crunchbase",
                "person_id": "b5bd8930-99bf-25e9-40e6-4aa0df4c9700"
              }
            },
            "person_uuid": "b5bd8930-99bf-25e9-40e6-4aa0df4c9700",
            "is_current": "t",
            "_type": "person",
            "_index": "2019_10_17_pt169155962_52707.person",
            "_id": "585b626d15268141b808bf29:Ed Macri",
            "self": "http://api.gazelle.ai/api/people?id=5b3d5d8933c59c14cdc90faf"
          }
        ]
      }
]
export default class ContactsTable extends React.Component {

    createTable = () => {
        let table = []
    
        // Outer loop to create parent
        table.push(<th>Name</th>)
        table.push(<th>Position</th>)
        table.push(<th>LinkedIn</th>)
        table.push(<th>Twitter</th>)
        for (let i = 0; i < 20; i++) {
          let children = []
          if (contacts[0].data[i].social)
          {
            children.push(<td>{contacts[0].data[i].full_name}</td>)
            children.push(<td>{contacts[0].data[i].job_title}</td>)
            if (contacts[0].data[i].social && contacts[0].data[i].social.linkedin)
            {
            children.push(<td>{contacts[0].data[i].social.linkedin.url}</td>)
            }
            if (contacts[0].data[i].social && contacts[0].data[i].social.twitter)
            {
            children.push(<td>{contacts[0].data[i].social.twitter.url}</td>)
            }
        }
            // children.push(<td>{contacts[0].data[i].social.linkedin.url}</td>)
        //   }
          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table
      }


  render() {
    return (
      <Table className="mb-0">
          {this.createTable()}
       
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>LinkedIn</th>
            <th>Twitter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{contacts[0].data[0].full_name}</th>  
            <th>{contacts[0].data[0].job_title}</th>
            <th>{contacts[0].data[0].social.linkedin.url}</th>
            <th>{contacts[0].data[0].social.twitter.url}</th>
          </tr>
        </tbody> */}
      </Table>
    );
  }
}
