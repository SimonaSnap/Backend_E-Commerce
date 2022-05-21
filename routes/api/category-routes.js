const router = require('express').Router();
const { del } = require('express/lib/application');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) =>
{
  // find all categories
  // be sure to include its associated Products
  try
  {
    const data = await Category.findAll({ include: [{ model: Product }] })
    res.status(200).json(data);

    if (!data)
    {
      res.status(404).json({ message: "No Categories exist" });
      return;
    };
  } catch (err)
  {
    res.status(500).json(err);
  }


  // Category.findAll({ include: [{ model: Product }] }).then((data) =>
  // {
  //   res.status(200).json(data)
  // }).catch((err) =>
  // {
  //   res.status(500).json(err)
  // })
});

router.get('/:id', async (req, res) =>
{
  // find one category by its `id` value
  // be sure to include its associated Products
  try
  {
    const data = await Category.findOne({ where: { id: req.params.id }, include: [{ model: Product }] })
    res.status(200).json(data);

    if (!data)
    {
      res.status(404).json({ message: "No Category exist at that id" });
      return;
    };
  } catch (err)
  {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) =>
{
  // create a new category
  try
  {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err)
  {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) =>
{
  // update a category by its `id` value
  try
  {
    const updating = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id
        },
      }
    );
    res.status(200).json(updating);
  } catch (err)
  {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) =>
{
  // delete on tag by its `category` value try
  try
  {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!deleteCategory)
    {
      res.status(404).json({ message: "No Category exist at that id" });
      return;
    }
    res.status(200).json(deleteCategory);
  } catch (err)
  {
    res.status(500).json(err);
  }
});

module.exports = router;
