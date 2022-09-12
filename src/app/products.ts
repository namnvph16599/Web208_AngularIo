import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interface/products';

@Component({
    selector: 'app-root',
    templateUrl: './products.component.html',
})


export class ProductsComponent implements OnInit {
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    // product: IProduct = {
    //     productId: 1,
    //     productName: 'mot',
    //     productCode: 'something',
    //     releaseDate: 'string',
    //     price: 1000,
    //     description: 'tesst',
    //     starRating: 4,
    //     imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8Yd/IAcvIAbvL1+v4SevKWuvgAcPGHr/elxfkAb/INdPIGc/L7/v/Q4fy30fqyzvrw9v7e6v0jfvPC1/sAaPGgwvnV5Pzr8/681fvl7f2KtfhsoPVKjfQsgvNclvVMkPRzp/Znn/ZemvXH3Pt/qvaTuPhyXbNsAAADSklEQVR4nO3b63LaMBSFUWIb7EjmZhMC4Z7b+z9iC0lmmrbEspQzZ592f/+Z0RpjSxZiMGCMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxtgvFatmspjOZrPpejFpHlbzYqw9pO+rmW62uzZzuXsvz1023O8O22p0+9ystMeX1nx92teurP3N73nv66wsz9bjabmw6RxPj879BfeHtS7vltqDjWi1GbpO3UflrfZwe7eqfBnKMykc9fLZE963rpfPnHBUBt9/JoXFoe8FNCZctVl/oCVhM+z9DbUlfGijgHaERdwVtCMc7+o4oBlh1W+atyecRkwTpoRFtM+K8DFmIrQknMR/R40Ij5EThRnhOk8AmhAeUi6hBeF9yl1oQnhKeJDaEKZdQgPChOWMEeFT7JLbinA+TAPiCyf9Xiou+/mfgt/zfu0hzHK/226Wt59a3msTOgqe7r3z1fNce7j9m7eBwLJFv9+u1ATOFa6y+rNo4GzoptoDjW4Z9KDJF9rjjK8KWZQ6o7fgpceAFU39pD3KlEJe732jPcqU9t3Ceqs9yKRC7kL0RcuXjQMepa32IJMquqdD41/SonubrZxpDzKpAGE+0R5kUiFCm6e6PgoQukJ7kEkFCDPtMaYVIrT62vQWhRTiRyGF+FFIIX4UUogfhRTiRyGF+P0H+zQBe97aY+yuuhlerxN489Wnf9YCbKfG/9EgIL8HuE2DfsiOFh60eQNhYX3S5g2EhSXCqTZRoUM4hyJ7DRFOMYgKIVY8kkK/19adkxTWj9q6c5LCcqStOycpxDizKCnEOMYgKoQ4Fi0pHGrjLgkKIdbdosLsRRt3SVAIse4WFbpnbdwlyWv4oI27JChsISYLQaHfIbxZSApRDvHLCbONtu0tOaEDOT4sJywh1t2iz1KA/e5zckKU/ymICf1Rm/aemBBk3S0oBFl3DwYveXm1EPzVD9+ttWnvrV9HV3vt/uuav/rhDcij9MvG//6v3DypQCF8FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFL4Df0A5OFCR5kbfNAAAAAASUVORK5CYII=',
    // };
    products: any = [
        { id: 12, name: 'Dr. Nice' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr. IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ]
}