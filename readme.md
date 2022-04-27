- Project setup

1. Clone the project "git clone git@github.com:nsrivastava645/webScrapper.git"
2. cd into the project
3. run ["npm i"]
4. run ["npm run start"]
5. Import the sample request into postman and run it.

## Sample Request

curl --location --request POST 'localhost:2020/reviews/getReviews' \
--header 'Content-Type: application/json' \
--data-raw '{
"url":"https://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=640254&CatId=3"
}'

# sample response

{
"reviews": [
{
"ratings": "4.0",
"reviewer": "RISHABH",
"date": "Aug 20, 2021",
"title": "Best deal",
"comment": "Must buy product at this price"
},
{
"ratings": "4.3",
"reviewer": "don,",
"date": "Jul 10, 2021",
"title": "Best product",
"comment": "It seems everything is fine, and it has a good sound system, but I looked up why Windows was saying it needs to be Activated from the HP website, and they said once it is up to date that will go away. That changed nothing. It is up to date and it was just never activated. I don't like the small solid state drive, and it has a place for a second drive, so I am thinking about finding all the drivers and installing normal Windows 10."
},
{
"ratings": "3.5",
"reviewer": "AChipps,",
"date": "Aug 07, 2020",
"title": "Windows 10 Pro Unactivated",
"comment": "It seems everything is fine, and it has a good sound system, but I looked up why Windows was saying it needs to be Activated from the HP website, and they said once it is up to date that will go away. That changed nothing. It is up to date and it was just never activated.\nI don't like the small solid state drive, and it has a place for a second drive, so I am thinking about finding all the drivers and installing normal Windows 10."
}
]
}
