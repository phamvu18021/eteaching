# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
from datetime import time
from werkzeug.exceptions import NotFound

import os
from dotenv import load_dotenv
from odoo import http, api
from odoo.http import request, Response
import json
import requests
from datetime import datetime

load_dotenv()
token = os.getenv('TOKEN')
date_format = '%m/%d/%Y, %I:%M:%S %p'

headers = {
    'Content-Type': 'application/json',
}


# 'Access-Control-Allow-Origin': '*',
#     "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Origin"


class ETeaching(http.Controller):

    # admission detail
    @http.route('/api/admin/admission', type='http', auth='none', csrf=False, method=['POST'])
    def get_th_admissions_news(self, **kwargs):
        try:
            client_headers = request.httprequest.headers
            auth = client_headers.environ.get('HTTP_AUTHORIZATION', False)
            if auth == token:
                current_id = kwargs.get('id', '').strip()
                domain = []
                if current_id:
                    domain.append(('id', '=', current_id))
                    records = http.request.env['th.admission'].sudo().search(
                        domain)
                data = []
                for record in records:
                    data.append({
                        '_id': record.id,
                        'img_thumb': record.th_school.th_img_thumb_url,
                        'title': record.name,
                        'school': {'label': record.th_school.name, 'code': record.th_school.th_code},
                        'major': [
                            {'label': obj.name,
                             'code': obj.th_code} for obj in record.th_majors],
                        'type_object': [{'label': obj.name, 'code': obj.th_code} for obj in record.th_objects],
                        'block': [{'label': obj.name, 'code': obj.th_code} for obj in record.th_major_combines],
                        'area': [{'label': obj.name, 'code': obj.th_code} for obj in record.th_areas],
                        'method': [{'label': obj.name, 'code': obj.th_code} for obj in record.th_methods],
                        'num': record.th_target if record.th_target else "",
                        'channel': [
                            {'label': obj.name,
                             'code': obj.th_code} for obj in
                            record.th_training_channels] if record.th_training_channels else [],
                        'total_time': [
                            {'label': obj.name, 'code': obj.th_code} for
                            obj in record.th_training_times] if record.th_training_times else [],
                        'block_combine': [{'label': obj.name, 'code': obj.th_code} for obj in
                                          record.th_block_combines] if record.th_block_combines else [],
                        'slug_url': record.slug_url if record.slug_url else '',
                        'time_stop': record.th_deadline.strftime('%m/%d/%Y, %I:%M:%S %p') if record.th_deadline else "",
                        'station': [{'label': obj.name, 'code': obj.th_code} for obj in
                                    record.th_station] if record.th_station else [],
                        'exam_location': [{'label': obj.name, 'code': obj.th_code} for obj in
                                          record.th_exam_location] if record.th_exam_location else [],
                        'point': [{'label': obj.name, 'code': obj.th_code} for obj in
                                  record.th_point_rangers] if record.th_point_rangers else [],
                        'city': [{'label': obj.name, 'code': obj.th_code} for obj in
                                 record.th_places] if record.th_places else [],
                        'time_stamp': record.create_date.strftime('%d/%m/%Y %H:%M:%S'),
                        'time_update': record.write_date.strftime('%d/%m/%Y %H:%M:%S'),
                    })

                body = {'data': data[0], 'message': "Successfully"}
                return Response(json.dumps(body), headers=headers)
        except Exception as e:
            response_data = {'Message': 'Failed', 'error': str(e)}
            return Response(json.dumps(response_data), headers=headers, status=500)

    # list-admission
    @http.route('/api/admin/list-admission', type='http', auth='none', cors='*', csrf=False, method=["POST"])
    def sector_records(self, **kwargs):
        try:
            client_headers = request.httprequest.headers
            auth = client_headers.environ.get('HTTP_AUTHORIZATION', False)

            if auth == token:
                school = kwargs.get('school', '')
                major = kwargs.get('major', '')
                type_object = kwargs.get('type_object', '')
                area = kwargs.get('area', '')
                method = kwargs.get('method', '')
                num = kwargs.get('num', '')
                total_time = kwargs.get('total_time', '')
                point = kwargs.get('point', '')
                block_combine = kwargs.get('block_combine', '')
                city = kwargs.get('city', '')
                channel = kwargs.get('channel', '')
                time_stop = kwargs.get('time_stop', '')
                perpage = int(kwargs.get('perpage', '9'))
                page = int(kwargs.get('page', '1'))

                domain = [('th_majors.th_code',
                           '=', major)] if major and major != 'all' else []
                domain += [('th_training_channels.th_code',
                            '=', channel)] if channel and channel != 'all' else []
                domain += [('th_objects.th_code', '=', type_object)
                           ] if type_object and type_object != 'all' else []
                domain += [('th_school.th_code', '=', school)
                           ] if school and school != 'all' else []
                domain += [('th_areas.th_code',
                            '=', area)] if area and area != 'all' else []
                domain += [('th_places.th_code',
                            '=', city)] if city and city != 'all' else []
                domain += [('th_methods.th_code',
                            '=', method)] if method and method != 'all' else []
                domain += [('th_target', '=', num)] if num and num != 'all' else []
                domain += [('th_deadline', '=', datetime.strptime(time_stop,
                                                                  '%d/%m/%Y').strftime(
                    '%Y/%m/%d'))] if time_stop and time_stop != 'all' else []
                domain += [('th_training_times.th_code', '=',
                            total_time)] if total_time and total_time != 'all' else []
                domain += [('th_point_rangers.th_code', '=', point)
                           ] if point and point != 'all' else []
                domain += [('th_block_combines.th_code', '=',
                            block_combine)] if block_combine and block_combine != 'all' else []

                offset = (page - 1) * perpage if perpage > 0 else 0
                records = http.request.env['th.admission'].sudo().search(
                    domain, offset=offset, limit=perpage)
                response_data = []

                for record in records:
                    response_data.append({
                        '_id': record.id,
                        'img_thumb': record.th_school.th_img_thumb_url,
                        'title': record.name,
                        'school': {'label': record.th_school.name, 'code': record.th_school.th_code},
                        'major': [
                            {'label': obj.name,
                             'code': obj.th_code} for obj in record.th_majors],
                        'type_object': [{'label': obj.name, 'code': obj.th_code} for obj in record.th_objects],
                        'block': [{'label': obj.name, 'code': obj.th_code} for obj in record.th_major_combines],
                        'area': [{'label': obj.name, 'code': obj.th_code} for obj in record.th_areas],
                        'method': [{'label': obj.name, 'code': obj.th_code} for obj in record.th_methods],
                        'num': record.th_target if record.th_target else "",
                        'channel': [
                            {'label': obj.name,
                             'code': obj.th_code} for obj in
                            record.th_training_channels] if record.th_training_channels else [],
                        'total_time': [
                            {'label': obj.name, 'code': obj.th_code} for
                            obj in record.th_training_times] if record.th_training_times else [],
                        'block_combine': [{'label': obj.name, 'code': obj.th_code} for obj in
                                          record.th_block_combines] if record.th_block_combines else [],
                        'slug_url': record.slug_url if record.slug_url else '',
                        'time_stop': record.th_deadline.strftime('%m/%d/%Y, %I:%M:%S %p') if record.th_deadline else "",
                        'station': [{'label': obj.name, 'code': obj.th_code} for obj in
                                    record.th_station] if record.th_station else [],
                        'exam_location': [{'label': obj.name, 'code': obj.th_code} for obj in
                                          record.th_exam_location] if record.th_exam_location else [],
                        'point': [{'label': obj.name, 'code': obj.th_code} for obj in
                                  record.th_point_rangers] if record.th_point_rangers else [],
                        'city': [{'label': obj.name, 'code': obj.th_code} for obj in
                                 record.th_places] if record.th_places else [],
                        'time_stamp': record.create_date.strftime('%d/%m/%Y %H:%M:%S') if record.create_date else '',
                        'time_update': record.write_date.strftime('%d/%m/%Y %H:%M:%S') if record.write_date else '',
                    })
                total_documents = len(
                    http.request.env['th.admission'].sudo().search(domain))
                next_page_offset = offset + perpage
                is_last_page = next_page_offset >= total_documents

                status = '200'
                message = 'successfully'
                body = {'status': status, 'message': message,
                        'data': {'admissions': response_data, 'is_last_page': is_last_page,
                                 'total_documents': total_documents}}
                return Response(json.dumps(body), headers=headers, status=200)
        except Exception as e:
            response_data = {'Message': 'False', 'error': str(e)}
            return Response(json.dumps(response_data), status=500)

    # filter-homepage
    @http.route('/api/admin/filter-homepage', auth='none', csrf=False, method=['POST'])
    def get_filter_home_page(self, **kwargs):
        try:
            client_headers = request.httprequest.headers
            auth = client_headers.environ.get('HTTP_AUTHORIZATION', False)
            if auth == token:
                filter_models = [
                    ('th.area', 'area', 'Phạm vi tuyển sinh'),
                    ('th.point.range', 'point', 'Khoảng điểm'),
                    ('th.method', 'method', 'Phương thức xét tuyển'),
                    ('th.training.channel', 'channel', 'Hình thức đào tạo'),
                    ('th.major', 'major', 'Ngành'),
                ]
                response = []

                for model_name, unit, label_name in filter_models:
                    filter_records = http.request.env[model_name].sudo().search([
                    ])
                    data_filter = []
                    for record in filter_records:
                        data_filter.append({
                            'label': record.name,
                            unit: record.th_code,
                        })

                    response.append({
                        'label': label_name,
                        'unit': unit,
                        "type": "option",
                        'items': data_filter,
                    })

            return Response(json.dumps(response), headers=headers)
        except Exception as e:
            error_message = {'error': str(e)}
            return Response(json.dumps(error_message), status=500, headers=headers)

    # filter-common
    @http.route('/api/admin/filter-common', auth='none', csrf=False, method=['POST'])
    def get_list_filter(self, **kwargs):
        try:
            client_headers = request.httprequest.headers
            auth = client_headers.environ.get('HTTP_AUTHORIZATION', False)
            if auth == token:
                filter_models = [
                    ('th.major', 'text', 'major', 'Chuyên ngành học'),
                    ('th.training.channel', 'option', 'channel', 'Hình thức học'),
                    ('th.place', 'option', 'city', 'Địa điểm học'),
                    ('th.method', 'option',
                     'method', 'Phương thức tuyển sinh'),
                ]
                data = []

                for model_name, label_type, label_unit, label_name in filter_models:
                    filter_records = http.request.env[model_name].sudo().search([
                    ])
                    data_filter = []
                    for res in filter_records:
                        data_filter.append({
                            'label': res.name,
                            label_unit: res.th_code,
                        })
                    data.append({
                        'label': label_name,
                        'type': label_type,
                        'unit': label_unit,
                        'items': data_filter,
                    })

                message = 'successfully'
                body = {'message': message, 'data': data}

                return Response(json.dumps(body), headers=headers, status=200)
        except Exception as e:
            response_data = {'Message': 'False', 'error': str(e)}
            return Response(json.dumps(response_data), status=500)

    @http.route('/api/admission-wordpress', type='json', auth='none', cors='*', csrf=False, methods=["POST"])
    def admissionWordPress(self, **post):
        client_values = request.httprequest.data
        body_str = client_values.decode('utf-8')
        json_data = json.loads(body_str)
        idWordPress = json_data.get('idWordPress', '')
        idOdoo = json_data.get('idOdoo', '')
        th_admission = request.env['th.admission'].sudo().search([('id', '=', idOdoo)])
        if th_admission:
            vals = {
                'idWordPress': idWordPress
            }
            th_admission.sudo().write(vals)

        try:
            body = {
                "Message": "Success",
                'status_code': 201
            }
            return body

        except Exception as e:
            response_data = {'Message': 'False', 'error': str(e)}
            return Response(json.dumps(response_data), status=500)

    # # Tổ hợp xét tuyển
    # @http.route('/api/admission_group', type='http', auth='none', csrf=False)
    # def get_th_admission_group(self, **kwargs):
    #     news_records = http.request.env['th.admission.group'].sudo().search([])

    #     # Extract relevant fields from the news records
    #     data = []
    #     for record in news_records:
    #         data.append({
    #             'name': record.name,
    #             'th_code': record.th_code if record.th_code else None,

    #         })

    #     body = {'results': data}
    #     return Response(json.dumps(body), headers=headers)

    # # Phương thức tuyển sinh
    # @http.route('/api/admission_method', type='http', auth='none', csrf=False)
    # def get_th_admission_method(self, **kwargs):
    #     news_records = http.request.env['th.admission.method'].sudo().search([
    #     ])

    #     # Extract relevant fields from the news records
    #     data = []
    #     for record in news_records:
    #         data.append({
    #             'name': record.name,
    #             'description': record.description,
    #             'th_code': record.th_code

    #         })

    #     body = {'results': data}
    #     return Response(json.dumps(body), headers=headers)

    # @http.route('/api/admission_scope', type='http', auth='none', csrf=False)
    # def get_th_admission_scope(self, **kwargs):
    #     news_records = http.request.env['th.admission.scope'].sudo().search([])
    #     # Extract relevant fields from the news records
    #     data = []
    #     for record in news_records:
    #         data.append({
    #             'name': record.name,
    #             'description': record.description,
    #             'th_code': record.th_code

    #         })
    #     body = {'results': data}
    #     return Response(json.dumps(body), headers=headers)

    # @http.route('/api/form_of_training', type='http', auth='none', csrf=False)
    # def get_th_form_of_training(self, **kwargs):
    #     news_records = http.request.env['th.form.of.training'].sudo().search([
    #     ])

    #     # Extract relevant fields from the news records
    #     data = []
    #     for record in news_records:
    #         data.append({
    #             'name': record.name,
    #             'description': record.description,
    #             'th_code': record.th_code

    #         })

    #     body = {'results': data}
    #     return Response(json.dumps(body), headers=headers)

    # @http.route('/api/object', type='http', auth='none', csrf=False)
    # def get_th_object(self, **kwargs):
    #     news_records = http.request.env['th.object'].sudo().search([])

    #     # Extract relevant fields from the news records
    #     data = []
    #     for record in news_records:
    #         data.append({
    #             'name': record.name,
    #             'description': record.description,
    #             'th_code': record.th_code

    #         })

    #     body = {'results': data}
    #     return Response(json.dumps(body), headers=headers)

    # @http.route('/api/schools', type='http', auth='none', csrf=False)
    # def get_th_school(self, **kwargs):
    #     news_records = http.request.env['th.school'].sudo().search([])

    #     # Extract relevant fields from the news records
    #     data = []
    #     for record in news_records:
    #         data.append({
    #             'name': record.name,
    #             'code_school': record.th_code,
    #             'description': record.description,

    #         })

    #     body = {'results': data}
    #     return Response(json.dumps(body), headers=headers)

    # @http.route('/api/training_time', type='http', auth='none', csrf=False)
    # def get_th_training_time(self, **kwargs):
    #     news_records = http.request.env['th.training.time'].sudo().search([])
    #     data = []
    #     for record in news_records:
    #         data.append({
    #             'name': record.name,
    #         })
    #     body = {'results': data}
    #     return Response(json.dumps(body), headers=headers)

    # @http.route('/api/university_major', type='http', auth='none', csrf=False)
    # def get_th_university_major(self, **kwargs):
    #     news_records = http.request.env['th.university.major'].sudo().search([
    #     ])
    #     data = []
    #     for record in news_records:
    #         data.append({
    #             'name': record.name,
    #             'description': record.description,
    #             'th_code': record.th_code
    #         })
    #     body = {'results': data}
    #     return Response(json.dumps(body), headers=headers)

    # @http.route('/api/th_university_sector', type='http', auth='none', csrf=False, methods=["POST"])
    # def get_th_university_sector(self, **kwargs):
    #     news_records = http.request.env['th.university.sector'].sudo().search([
    #     ])
    #     data = []
    #     for record in news_records:
    #         data.append({
    #             'name': record.name,
    #             'description': record.description,
    #             'th_code': record.th_code
    #         })
    #     body = {'results': data}
    #     return Response(json.dumps(body), headers=headers)

    # @http.route('/api/backlink', type='json', auth='none', cors='*', csrf=False, methods=["POST"])
    # def back_link(self, **post):
    #     client_headers = request.httprequest.headers
    #     auth = client_headers.environ.get('HTTP_AUTHORIZATION', False)
    #     if auth:
    #         client_values = request.httprequest.get_json()
    #         get_link = client_values.get('link_tracker')
    #         th_website = client_headers.environ.get('HTTP_HOST')
    #         str_start_date = client_values.get('date_start', False)
    #         if ',' not in str_start_date:
    #             date_start = datetime.strptime(str_start_date, '%H:%M:%S %d/%m/%Y') - relativedelta(
    #                 hours=7) if str_start_date else datetime.now()
    #         else:
    #             date_start = datetime.strptime(str_start_date, date_format) - relativedelta(
    #                 hours=7) if str_start_date else datetime.now()
    #
    #         utm_params = client_values.get('odoo_utmParams', {})
    #         utm_source = utm_params.get('utm_source', '')
    #         utm_campaign = utm_params.get('utm_campaign', '')
    #         utm_medium = utm_params.get('utm_medium', '')
    #
    #         link_tracker = request.env['link.tracker'].sudo().search(
    #             [('url', '=', get_link), ('source_id.name', '=', utm_source)])
    #         if link_tracker:
    #             link_tracker.sudo().write({
    #                 'th_count_link_click': int(link_tracker.th_count_link_click) + 1
    #             })
    #         exist_user = request.env['th.session.user'].sudo().search(
    #             [('th_user_client_code', '=', client_values.get('code'))])
    #         if not exist_user:
    #             create_user_click = request.env['th.session.user'].sudo().create({
    #                 'th_link_tracker_id': link_tracker.id if link_tracker else False,
    #                 'th_website': th_website,
    #                 'th_web_click_ids': [
    #                     (0, 0, {
    #                         'th_screen_time_start': date_start,
    #                         'name': get_link,
    #                     })
    #                 ]
    #             })
    #         else:
    #             exist_user.write({'th_link_tracker_id': link_tracker.id if link_tracker else False})
    #             web_click_id = request.env['th.web.click'].sudo().search([('th_session_user_id', '=', exist_user.id)],
    #                                                                      order="id desc", limit=1)
    #             if web_click_id and web_click_id.name == get_link:
    #                 web_click_id.write({'th_screen_time_end': date_start})
    #             else:
    #                 web_click_id.th_screen_time_end = date_start
    #                 request.env['th.web.click'].sudo().create({
    #                     'th_screen_time_start': date_start,
    #                     'name': get_link,
    #                     'th_session_user_id': exist_user.id
    #                 })
    #
    #     try:
    #         body = {
    #             "Message": "Success",
    #             'code': create_user_click.th_user_client_code if create_user_click else exist_user.th_user_client_code,
    #             'status_code': 201
    #         }
    #         return Response(json.dumps(body), status=500)
    #
    #     except Exception as e:
    #         response_data = {'Message': 'False', 'error': str(e)}
    #         return Response(json.dumps(response_data), status=500)

    # @http.route('/api/end_session', type='json', auth='none', cors='*', csrf=False, methods=["POST"])
    # def end_session(self):
    #     client_headers = request.httprequest.headers
    #     auth = client_headers.environ.get('HTTP_AUTHORIZATION', False)
    #     if auth:
    #         client_values = request.httprequest.get_json()
    #         get_link = client_values.get('code')

    # @http.route('/api/admin/filter-homepage', type='http', auth='none', cors='*', csrf=False, methods=["POST"])
    # def take_records_by_id(self, **kwargs):
    #     try:
    #         client_headers = request.httprequest.headers
    #         auth = client_headers.environ.get('HTTP_AUTHORIZATION', )
    #         if auth == token:
    #             ids = kwargs.get('id', '').strip()
    #             domain = []
    #             if ids:
    #                 domain.append(('id', '=', ids))
    #             records = http.request.env['th.admission.news'].sudo().search(
    #                 domain)
    #             response_data = []
    #             if records:
    #                 for record in records:
    #                     response_data.append({
    #                         'university': record.th_school_id.name,
    #                         'major': record.th_university_major_id.name,
    #                         'objects': [obj.name for obj in record.th_object_ids],
    #                         'area': record.th_admission_scope_id.name,
    #                         'method': [method.name for method in record.th_admission_method_ids],
    #                         'target': record.th_targets,
    #                         'train': record.th_form_of_training_id.name,
    #                         'time': record.th_training_time_id.name,
    #                         'point': record.th_point_ranger_id.name,
    #                         'group': [group.name for group in record.th_admission_group_ids],
    #                         'desc': record.th_content,
    #                         'date': record.th_deadline.strftime('%d/%m/%Y'),
    #                         'city': record.th_place_id.name,
    #                         'time_stamp': record.create_date.strftime('%d/%m/%Y %H:%M:%S'),
    #                         'time_update': record.write_date.strftime('%d/%m/%Y %H:%M:%S'),
    #                     })

    #             status = '200'
    #             message = 'success'
    #             body = {'message': message, 'response': response_data}

    #             return Response(json.dumps(body), status=500, headers=headers)

    #         else:
    #             # Handle the case when authentication is not present
    #             error_message = {
    #                 'Message': 'Authentication failed. Please provide valid credentials.'}
    #             return Response(json.dumps(error_message), status=401, headers=headers)

    #     except Exception as e:
    #         response_data = {'Message': 'False', 'error': str(e)}
    #         return Response(json.dumps(response_data), headers=headers, status=500)
