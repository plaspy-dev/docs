---
slug: /teltonika/ftc305
id: ftc305
sidebar_label: FTC305
sidebar_class_name: menu_item_tracker
---
# Teltonika - FTC305

![FTC305](./tracker.png)

El FTC305 es un rastreador GPS compacto 4G LTE Cat 1 diseñado específicamente para la movilidad eléctrica y la telemática de flotas. Compatible con Plaspy desde el primer momento, el FTC305 aporta telemetría robusta de grado vehicular a bicicletas eléctricas, carretillas elevadoras, carros shuttle, maquinaria utilitaria y otros transportes eléctricos, combinando una protección IP67 duradera con soporte de alta tensión y opciones de instalación flexibles.

Con el objetivo de ofrecer seguimiento en tiempo real confiable y telemetría detallada del bus CAN, el FTC305 se integra con Plaspy para respaldar flujos de trabajo de gestión de flotas, respuesta ante robo y analítica operativa. Con perfiles de radio en variantes, soporte para antena externa y baterías de respaldo externas opcionales, el FTC305 es una opción práctica cuando importa una posición GNSS precisa, conectividad celular estable y monitoreo personalizado de parámetros CAN.

## Puntos clave

- Compatible con Plaspy: integra telemetría CAN-bus y datos GNSS en Plaspy para rastreo en tiempo real y generación de informes.
- 4G LTE Cat 1 con respaldo 2G: conectividad celular moderna para amplia cobertura y longevidad en diversas regiones.
- Amplio rango de alimentación \(10–97 V\): soporta plataformas de e-mobility de alta tensión como bicicletas eléctricas, carretillas y vehículos utilitarios.
- Carcasa robusta IP67 con variante de instalación en fábrica sin carcasa: elija instalación exterior sellada o un módulo embebido para montaje en el chasis.
- Precisión GNSS mejorada con soporte para antena GNSS externa para mejorar la fiabilidad de las señales en entornos desafiantes.
- Lectura CAN-bus y bases de datos de parámetros CAN personalizadas: extraiga telemetría del vehículo para monitoreo de combustible, eventos de ignición y otros métricos derivados del ECU cuando estén disponibles.
- Opciones de pedido y packaging flexibles: paquetes estándar y kits personalizables sin carcasa \(con adaptadores de antena externa y batería de respaldo externa opcional\).
- Opción de batería externa: batería externa de 1200 mAh disponible en paquetes de fábrica personalizados para una mayor resiliencia ante fallos de alimentación.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el FTC305 transmite ubicaciones y telemetría CAN-bus a su instancia de Plaspy para mapas en vivo, alertas e informes históricos. Plaspy ingiere datos de ubicación y del vehículo para que los gestores de flotas puedan monitorear el cumplimiento de rutas, el estado del vehículo y métricas clave en tiempo real. Las opciones de antena externa y el amplio rango de alimentación ayudan a mantener la conectividad continua en flotas de movilidad eléctrica.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy para mapeo y geocercas.
- Datos CAN-bus disponibles para paneles de Plaspy — útiles para proxies de monitoreo de combustible, RPM, estado de la batería y detección de eventos de ignición cuando esos sensores están expuestos en el CAN del vehículo.
- Soporta antenas GNSS y celulares externas para mejorar la recepción de señal y reducir pérdidas de fijación.
- Las opciones de batería de respaldo permiten operación a corto plazo ante pérdida de alimentación principal, posibilitando que Plaspy genere alertas anti-robos o trazas de posición incluso cuando se interrumpe la alimentación del vehículo.
- Las opciones de packaging y variantes simplifican la integración en implementaciones personalizadas de gestión de flotas, con variantes de instalación en fábrica para instalaciones embebidas.

## Visión técnica

| Conectividad | módulo celular 4G LTE Cat 1 con respaldo 2G GSM cuando aplique |
| --- | --- |
| Bandas | EG915U-EU: LTE FDD B1/B3/B5/B7/B8/B20/B28; 2G GSM B2/B3/B5/B8. EG915U-LA: LTE FDD B2/B3/B4/B5/B7/B8/B28/B66; 2G GSM B2/B3/B5/B8. |
| Alimentación y batería | Amplio rango de entrada 10–97 V. Batería externa de respaldo de 1200 mAh disponible en paquetes de fábrica específicos. |
| Interfaces | Capacidad de lectura CAN-bus; cable principal de 7 pines para integración en vehículos; soporte para antenas externas GNSS y celulares; adaptadores de antena incluidos en variantes sin carcasa. |
| GNSS | Precisión GNSS mejorada; admite antena GNSS externa \(detalles específicos del chipset no especificados en la página del producto\). |
| Bluetooth | No especificado en la página del producto \(utilice Plaspy para combinar la telemetría FTC305 con datos de sensores Bluetooth externos si están disponibles en su solución\). |
| Gestión remota | Opciones de pedido y packaging indicadas; FOTA/gestión remota no especificadas en la página del producto. |
| Factor de forma | Compacto; carcasa con clasificación IP67 estándar. Variante de instalación en fábrica sin carcasa disponible para instalaciones embebidas con conectores de antena externa. |

## Casos de uso

- Gestión de flotas para vehículos eléctricos: monitorizar ubicación, ciclos de servicio y telemetría derivada de CAN para mejorar la eficiencia operativa y la planificación del mantenimiento.
- Rastreo anti‑robo y respuesta rápida: informe de posición en tiempo real con resiliencia de la batería de respaldo para detectar y responder ante movimientos no autorizados o manipulación de la alimentación, mediante flujos de trabajo de Plaspy.
- Manejo de materiales y e-movilidad industrial: instalar en carretillas elevadoras, carros utilitarios y vehículos shuttle para capturar datos de uso, eventos de ignición y historial de rutas para análisis de productividad.
- Integraciones embebidas en vehículos: usar las opciones sin carcasa, antena externa y batería para instalaciones discretas dentro de los marcos de los vehículos o carcasas personalizadas.
- Analítica basada en telemetría: combinar señales CAN-bus con datos de posición en Plaspy para soportar proxies de monitoreo de combustible, seguimiento del estado de la batería y KPI personalizados para flotas eléctricas.

## Por qué elegir este rastreador con Plaspy

El FTC305 es una elección pragmática cuando se necesita un rastreador GPS compacto compatible con Plaspy que maneje las realidades eléctricas de las plataformas de e-movilidad. Su amplio rango de entrada de 10–97 V y su carcasa IP67 lo hacen adecuado para una variedad de transportes eléctricos, mientras que la lectura CAN-bus ofrece telemetría más rica que la ubicación por sí sola. Con conectividad LTE Cat 1, soporte para antena externa y packaging configurable, el FTC305 encaja tanto en despliegues de gestión de flotas listos para usar como en instalaciones embebidas personalizadas.

La telemetría del FTC305 combinada con Plaspy proporciona seguimiento en tiempo real accionable, alertas impulsadas por telemetría e informes históricos para los gestores de flota. Utilice la base de datos de parámetros CAN personalizada para exponer métricas específicas del vehículo en los paneles de Plaspy — desbloqueando proxies de monitoreo de combustible, seguimiento del estado de la batería y KPIs personalizados que importan para la movilidad eléctrica. Antes de la adquisición, verifique la disponibilidad y el estado de soporte actuales de las SKU del FTC305 y avisos de fin de vida \(EOL\) en la página del fabricante para garantizar una mantenibilidad a largo plazo.

