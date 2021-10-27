import requests
#import config
import json
ig_user_id=1390168641066967
user_access_token="EAAHqIviOJaoBAM7fw8OMf1ouoU63wRXL8MO7L6AOK4hV1H04pfY4SZANCm6c1VCZBp10YymF8qk5XjZB14cnCi64uLcVn64TffoBpmAvowcot8PEL1g5nbgIry7mna8KcxTkhoWwz2mkA8ptHumD1JvFXFV4ue4vd6ndDZBTLeGZBU50aodtKWxJTjGM2uxYZD"
def postInstagramQuote():
#Post the Image
    image_location_1 = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fayedot.com%2F176%2FMiniBlog%2FLatest-Funny-BGMI-Memes-%257C-Pack-1&psig=AOvVaw0T2G7EMRygjIF1Hd-ysFNl&ust=1628711261978000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDRwbWcp_ICFQAAAAAdAAAAABAd'
    post_url = 'https://graph.facebook.com/v10.0/{}/media'.format(ig_user_id)
    payload = {
    'image_url': image_location_1,
    'caption': 'Get jobs online on https://careers-portal.co.za #career #hiring #jobs #job #jobssouthafrica #hiringnow',
    'access_token': user_access_token
    }
    r = requests.post(post_url, data=payload)
    print(r.text)
    result = json.loads(r.text)
    if 'id' in result:
        creation_id = result['id']
        second_url = 'https://graph.facebook.com/v10.0/{}/media_publish'.format(ig_user_id)
        second_payload = {
        'creation_id': creation_id,
        'access_token': user_access_token
        }
        r = requests.post(second_url, data=second_payload)
        print('--------Just posted to instagram--------')
        print(r.text)
    else:
        print('HOUSTON we have a problem')
postInstagramQuote()