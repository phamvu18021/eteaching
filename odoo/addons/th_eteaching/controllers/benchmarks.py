# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
from datetime import time
from werkzeug.exceptions import NotFound
import os
from dotenv import load_dotenv
import os
from dotenv import load_dotenv
from odoo import http, api
from odoo.http import request, Response
import json
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
    @http.route('/api/admin/benchmark', type='http', auth='none', csrf=False, method=['POST'])
    def get_th_admissions_news(self, **kwargs):
        try:
            client_headers = request.httprequest.headers
            auth = client_headers.environ.get('HTTP_AUTHORIZATION', )
            if auth == token:
                current_id = kwargs.get('id', '').strip()
                domain = []
                if current_id:
                    domain.append(('id', '=', current_id))
                    records = http.request.env['th.benchmark'].sudo().search(
                        domain)
                data = []
                for record in records:
                    data.append({
                        '_id': record.id,
                        'major': [
                            {'label': obj.name,
                             'code': obj.th_code} for obj in record.th_major],
                        'block_combine': [{'label': obj.name, 'code': obj.th_code} for obj in
                                          record.th_block_combine],
                        'benchmark': record.th_point,
                        'note': record.th_note,
                        'title': record.th_title,
                        'time_stamp': record.create_date.strftime('%d/%m/%Y %H:%M:%S'),
                        'time_update': record.write_date.strftime('%d/%m/%Y %H:%M:%S'),
                    })

                body = {'data': data[0], 'message': "Successfully"}
                return Response(json.dumps(body), headers=headers)
        except Exception as e:
            response_data = {'Message': 'Failed', 'error': str(e)}
            return Response(json.dumps(response_data), headers=headers, status=500)

    # list-admission
    @http.route('/api/admin/list-benchmark', type='http', auth='none', cors='*', csrf=False, method=["POST"])
    def sector_records(self, **kwargs):
        try:
            client_headers = request.httprequest.headers
            auth = client_headers.environ.get('HTTP_AUTHORIZATION', False)

            if auth == token:
                major = kwargs.get('major', '')
                block_combine = kwargs.get('block_combine', '')
                benchmark = kwargs.get('benchmark', '')
                note = kwargs.get('note', '')
                title = kwargs.get('title', '')
                perpage = int(kwargs.get('perpage', '9'))
                page = int(kwargs.get('page', '1'))

                domain = [('th_majors.th_code',
                           '=', major)] if major and major != 'all' else []
                domain += [('th_block_combine.th_code', '=',
                            block_combine)] if block_combine and block_combine != 'all' else []
                domain += [('th_point.th_code', '=', benchmark)
                           ] if benchmark and benchmark != 'all' else []
                domain += [('th_note.th_code', '=', note)] if note and note != 'all' else []
                domain += [('th_title.th_code', '=', title)] if title and title != 'all' else []

                offset = (page - 1) * perpage if perpage > 0 else 0
                records = http.request.env['th.benchmark'].sudo().search(
                    domain, offset=offset, limit=perpage)
                response_data = []

                for record in records:
                    response_data.append({
                        '_id': record.id,
                        'major': [
                            {'label': obj.name,
                             'code': obj.th_code} for obj in record.th_major],
                        'block_combine': [{'label': obj.name, 'code': obj.th_code} for obj in
                                          record.th_block_combine],
                        'benchmark': record.th_point,
                        'note': record.th_note,
                        'title': record.th_title,
                        'time_stamp': record.create_date.strftime('%d/%m/%Y %H:%M:%S') if record.create_date else False,
                        'time_update': record.write_date.strftime('%d/%m/%Y %H:%M:%S') if record.write_date else False,
                    })

                total_documents = len(
                    http.request.env['th.benchmark'].sudo().search(domain))
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

