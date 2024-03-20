from odoo import fields, models


class ThFormOfTraining(models.Model):
    _name = 'th.training.channel'
    _description = 'Hình thức đào tạo'

    name = fields.Char(string="Tên trường", required=True)
    description = fields.Text(string="Mô tả")
    th_code = fields.Char("Mã đào tạo", required=True)
