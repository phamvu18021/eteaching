from odoo import fields, models,api
from odoo.exceptions import ValidationError
class ThPointRanger(models.Model):
    _name = 'th.point.range'
    _description = 'Địa điểm'

    name = fields.Char(compute='_compute_name', store=True)
    start_point = fields.Integer(string='Start Point')
    end_point = fields.Integer(string='End Point')
    th_code = fields.Char(string='End Point', compute='_compute_name', store=True)


    _sql_constraints = [
        ('check_point_range', 'CHECK(end_point >= start_point)', 'End Point phải lớn hơn hoặc bằng Start Point!')
    ]

    @api.depends('start_point', 'end_point')
    def _compute_name(self):
        for record in self:
            record.name = f'Từ {record.start_point} đến {record.end_point}'
            record.th_code = [record.start_point, record.end_point]

    @api.constrains('start_point', 'end_point')
    def _check_unique_range(self):
        for record in self:
            overlapping_records = self.search([
                ('id', '!=', record.id),
                '|',
                '&',
                ('start_point', '<=', record.start_point),
                ('end_point', '>=', record.start_point),
                '&',
                ('start_point', '<=', record.end_point),
                ('end_point', '>=', record.end_point),
            ])
            for existing_record in overlapping_records:
                if (
                        record.start_point >= existing_record.start_point
                        and record.end_point <= existing_record.end_point
                ) or (
                        record.start_point <= existing_record.start_point
                        and record.end_point >= existing_record.end_point
                ):
                    raise ValidationError("Khoảng điểm mới nằm trong hoặc trùng với khoảng điểm đã có!")

    @api.constrains('start_point', 'end_point')
    def _check_limit_point(self):
        for record in self:
            if (
                    record.start_point < 12 or record.start_point > 30
            ) or (
                    record.end_point < 12 or record.end_point > 30
            ):
                raise ValidationError("Khoảng điểm giới hạn từ 12-30")