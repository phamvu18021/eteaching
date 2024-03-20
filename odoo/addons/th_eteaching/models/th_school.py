from odoo import fields, models,api
class ThSchool(models.Model):
    _name = 'th.school'
    _description = 'trường học'


    name = fields.Char(string="Tên trường", required=True)
    th_code = fields.Char("Mã trường", required=True)
    description = fields.Text("Mô tả")
    th_img_thumb = fields.Binary("Ảnh logo")
    th_img_thumb_url = fields.Char("URL Ảnh logo", compute="_compute_img_thumb_url", store=True)

    @api.depends('th_img_thumb')
    def _compute_img_thumb_url(self):
        base_url = self.env['ir.config_parameter'].sudo().get_param('web.base.url')
        for school in self:
            if school.th_img_thumb:
                school.th_img_thumb_url = f"{base_url}/web/image/{school._name}/{school.id}/th_img_thumb"
            else:
                school.th_img_thumb_url = False
