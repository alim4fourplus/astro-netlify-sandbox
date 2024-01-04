export default async(req,context){

    const {city,country} = context.params;
    return new Response(`This is the ${city} and this is the ${country}`)
}

export const config={
    path:'/travel/:city/:country'
}