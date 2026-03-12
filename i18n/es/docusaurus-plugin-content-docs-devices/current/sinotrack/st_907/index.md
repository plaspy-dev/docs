---
slug: /sinotrack/st_907
id: st_907
sidebar_label: ST-907
sidebar_class_name: menu_item_tracker
---
# SinoTrack - ST-907

![ST-907](./tracker.jpg)

# SinoTrack ST-907

El SinoTrack ST-907 es un rastreador GPS compacto y cableado, diseñado para instalación encubierta en vehículos y para un monitoreo fiable compatible con Plaspy. Su factor de forma miniatura, las antenas GPS y GSM de alta sensibilidad integradas y el soporte GSM de cuatro bandas hacen del ST-907 una opción práctica para el seguimiento en tiempo real, la respuesta ante robos y la gestión de flotas en una amplia variedad de vehículos.

El ST-907 reporta la posición y alertas mediante SMS y GPRS, y admite configuraciones configurables de servidor IP/puerto, lo que permite conectarlo a plataformas de terceros como Plaspy. Con control remoto por relé para cortar circuitos de combustible o energía, alarmas por exceso de velocidad y geocercas, y diagnósticos por SMS, el ST-907 ofrece telemetría esencial y capacidad de inmovilización para automóviles, taxis, motocicletas y vehículos logísticos.

## Puntos Clave

- Compatible con Plaspy vía IP/puerto de servidor GPRS configurable — reporta seguimiento en tiempo real y alarmas a Plaspy usando los comandos SMS/GPRS del dispositivo.
- GSM de cuatro bandas \(850/900/1800/1900 MHz\) para amplia cobertura regional y selección flexible de SIM \(SIM no incluida\).
- Antenas GPS y GSM de alta sensibilidad integradas para fijaciones de posición fiables en instalaciones típicas de vehículos.
- Control remoto por relé para cortar combustible o circuitos de energía — función práctica de antirrobo/inmovilizador para vehículos.
- Actualizaciones de ubicación en tiempo real por SMS y GPRS, alarmas de exceso de velocidad y geocercas configurables para gestión de flotas y seguridad.
- Gestión de números autorizados y diagnósticos por SMS para un control y solución de problemas rápido en terreno.
- Factor de forma mini para facilitar su ocultamiento durante la instalación en coches, motocicletas y vehículos ligeros comerciales.

## Cómo Funciona con Plaspy

El ST-907 envía datos de ubicación y alarmas por GPRS o SMS. Como el dispositivo permite configurar IP y puerto del servidor vía SMS, puede configurarse para reportar directamente al endpoint del servidor de Plaspy. Los instaladores y administradores pueden inicializar el dispositivo configurando APN y parámetros del servidor, luego dirigir el dispositivo a Plaspy para habilitar el seguimiento en tiempo real, alertas e informes dentro de su cuenta de Plaspy.

- Actualizaciones de ubicación y telemetría en tiempo real por GPRS \(posición, velocidad, alarmas de exceso de velocidad\) y SMS como respaldo.
- Alarmas y eventos de estado: la alarma de exceso de velocidad y alertas de geocerca configurables son compatibles y pueden ser reenviadas a Plaspy como eventos de alarma.
- Inmovilizador remoto: el corte de combustible/energía mediante relé puede utilizarse como una característica de inmovilización controlada por SMS o por comando de la plataforma \(sujeto al soporte de Plaspy para comandos de relé remotos\).
- Gestión de números autorizados y control por SMS para acceso administrativo local y seguro cuando no haya acceso a la red.
- Configuración vía SMS: configurar APN, IP y puerto del servidor usando comandos de inicialización por SMS del dispositivo para conectar el rastreador al endpoint de ingestión de Plaspy.

## Notas de Configuración

Para conectar el ST-907 a una plataforma de terceros, use los comandos de configuración por SMS del dispositivo. La documentación del dispositivo proporciona los pasos de inicialización recomendados \(reemplazar la IP y el puerto del servidor de ejemplo por los valores del servidor de Plaspy\):

- SMS1: 7100000 — comando de inicialización del dispositivo.
- SMS2: 8040000 &lt;server\_IP&gt; &lt;port&gt; — configurar la IP y el puerto del servidor GPRS \(reemplazar por valores de Plaspy\).
- SMS3: 8030000 &lt;APN&gt; &lt;APNuser&gt; &lt;APNpassword&gt; — configurar APN del operador solo si es requerido por la SIM.

Nota: el ST-907 no incluye tarjeta SIM; elija una SIM local con el plan de datos y opciones de roaming deseados. El dispositivo también puede usarse con la plataforma SinoTrack PRO del fabricante \(ejemplos de IP de servidor por defecto proporcionados por SinoTrack\), pero para la compatibilidad con Plaspy configure la IP/puerto del servidor a los valores de Plaspy y confirme cualquier requisito de autenticación con la documentación de Plaspy.

## Visión Técnica

| Conectividad | Informes por GPRS y SMS sobre GSM de cuatro bandas \(850/900/1800/1900 MHz\) |
| --- | --- |
| Bandas | GSM de cuatro bandas 850 / 900 / 1800 / 1900 MHz |
| Potencia y Batería | Instalación por cable en vehículo. Batería interna de respaldo no especificada en la descripción del producto. |
| Interfaz | Salida por relé para corte remoto de combustible/energía; comandos de diagnóstico y control por SMS. No se detallan I/O digitales específicos ni entradas de ignición en la descripción. |
| GNSS | Antenas GPS de alta sensibilidad integradas para fijaciones fiables \(la precisión no especificada en la descripción suministrada\) |
| Bluetooth | No se listan sensores Bluetooth ni interfaces BLE en la descripción del producto \(verificar si se requiere BLE\). |
| Gestión Remota | Configurar APN y IP/puerto del servidor vía SMS. Soporta consulta/cambio de IMEI vía comandos SMS; compatible con SinoTrack PRO web/app \(plataforma gratuita\). |
| Formato | Rastreador por cable de tamaño mini para instalación oculta en coches, taxis, motocicletas y vehículos ligeros comerciales. |

## Casos de Uso

- Gestión de flotas para pequeñas empresas — seguimiento en tiempo real y alertas de geocerca y exceso de velocidad para mejorar rutas y seguridad.
- Antirrobo e inmovilización — corte remoto de combustible/energía mediante relé para desincentivar el hurto.
- Vehículos de taxi y ride-hailing — instalación discreta combinada con seguimiento en tiempo real y control de números autorizados.
- Seguimiento de motocicletas y coches particulares — factor de forma mini para montaje oculto y actualizaciones fiables por SMS/GPRS.
- Logística y vehículos de reparto — rastrear activos en tiempo real y recibir notificaciones de geocerca y exceso de velocidad.

## Por Qué Elegir Este Rastreador con Plaspy

El SinoTrack ST-907 es una opción práctica compatible con Plaspy cuando se necesita un rastreador GPS compacto y con cable, con informes flexibles y capacidad básica de inmovilización. Su GSM de cuatro bandas y los informes por SMS/GPRS le ofrecen la posibilidad de usar la plataforma gratuita SinoTrack PRO o dirigir el dispositivo a Plaspy actualizando la IP/puerto del servidor y el APN. Para operadores enfocados en la gestión de flotas, protección antirrobo y telemetría sencilla, el ST-907 proporciona un bloque de construcción confiable que se integra a los flujos de trabajo de seguimiento en tiempo real, alertas y reportes de Plaspy.

Antes del despliegue, confirme los valores requeridos de IP/puerto del servidor de Plaspy y cualquier método de autenticación para que pueda aplicar los comandos de inicialización por SMS del dispositivo. También verifique los requisitos locales de registro de IMEI cuando corresponda y seleccione un plan SIM que se ajuste a sus necesidades de datos y roaming. Si requiere sensores Bluetooth o telemetría extendida \(sensores de nivel de combustible, datos CAN-bus, etc.\), revise modelos alternativos o consulte con el proveedor sobre accesorios y notas de integración.

Soporte y Garantía: SinoTrack suministra diagramas de cableado, imágenes de instalación y un manual de usuario para activación y configuración. El fabricante ofrece soporte 24 horas, opciones de envío, incluyendo mensajería exprés, y una garantía de dos años para productos con procedimientos de reporte de defectos tal como lo documenta SinoTrack.

