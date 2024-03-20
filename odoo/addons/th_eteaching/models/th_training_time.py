from odoo import fields, models


class ThTrainingTime(models.Model):
    _name = 'th.training.time'
    _description = 'Thời gian đào tạo'

    name = fields.Char(string="Thời gian", required=True)
    th_code = fields.Char("Mã Thời gian đào tạo", required=True)
