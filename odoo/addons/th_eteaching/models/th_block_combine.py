from odoo import fields, models


class ThAdmissionGroup(models.Model):
    _name = 'th.block.combine'
    _description = 'Tổ hợp xét tuyển'

    name = fields.Char(string="Tổ hợp", required=True)
    th_code = fields.Char(string="Mã tổ hợp", required=True)
