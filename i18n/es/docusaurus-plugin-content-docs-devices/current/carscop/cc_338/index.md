---
slug: /carscop/cc_338
id: cc_338
sidebar_label: CC-338
sidebar_class_name: menu_item_tracker
---
# Carscop - CC-338

![CC-338](./tracker.JPG)

El CC-338 4G T-Box es un rastreador GPS de telemática vehicular compatible con Plaspy, diseñado para alquiler de coches, car sharing y gestión de flotas. Construido como un T-Box compacto con antenas GSM/GPS integradas y conectividad OBD II CANBUS, el CC-338 convierte vehículos comunes en coches controlables desde el teléfono móvil para alquiler sin personal y uso compartido en autoservicio. Su soporte celular multi-red \(4G/3G/2G\), A-GPS con respaldo LBS y registro a bordo lo convierten en una opción fiable para el seguimiento en tiempo real y el control remoto seguro.

El CC-338 combina telemetría profunda del vehículo con múltiples canales de control: Internet \(app/API\), Bluetooth LE para control local sin conexión y salidas cableadas para cierre central, sirena, luces, claxon y corte de motor. Diseñado específicamente para integradores y operadores de flotas, la unidad admite telemetría, alarmas de encendido y de puertas, flujos de trabajo antirrobo y comandos de inmovilizador remoto, al tiempo que ofrece una API abierta y conectividad TCP/IP para la integración con Plaspy y despliegues en servidores privados.

## Aspectos clave

- Rastreador GPS compatible con Plaspy para seguimiento en tiempo real y gestión de flotas, con API abierta y conectividad TCP/IP para una integración fluida.
- Soporte celular global multibanda 4G/3G/2G que garantiza una amplia cobertura de red para telemetría y control remoto.
- La interfaz OBD II CANBUS proporciona telemetría y capacidad de control avanzadas del vehículo, habilitando diagnósticos y datos relacionados con el combustible cuando el CAN del vehículo lo admite.
- Múltiples métodos de control: Internet/app/API, Bluetooth LE para control local fuera de línea y salidas cableadas para cierre central, luces, sirena y corte de motor con inmovilizador.
- A-GPS incorporado y respaldo LBS, con registro a bordo y retención de la última posición conocida para condiciones sin GPS o sin GSM.
- Sensores de seguridad que incluyen sensor de choque, sensor G para comportamiento de conducción, alarmas de puertas y ACC, además de una batería de respaldo Li‑ion recargable para alertas por fallo de energía.
- Amplio rango de tensión de operación \(9–40 V\) compatible con vehículos de 12 V y 24 V, incluyendo flotas de gasolina, diésel y eléctricos.

## Cómo funciona con Plaspy

Al combinarse con Plaspy, el CC-338 actúa como una pasarela de datos y comandos entre el vehículo y su plataforma de gestión. Transmite la ubicación y la telemetría del vehículo a Plaspy para monitorización en tiempo real, activa alarmas y acepta comandos remotos para inmovilización o control de acceso. La integración utiliza el canal TCP/IP del dispositivo o la API abierta, de modo que los gestores de flotas pueden implementar flujos de trabajo para car sharing, antirrobo y programación de mantenimiento.

- Actualizaciones de ubicación y telemetría en tiempo real transmitidas a Plaspy para monitorización e informes.
- Estado de encendido/ACC, eventos de puertas y alarmas reportados a Plaspy para seguridad y seguimiento del uso.
- Datos del vehículo CANBUS \(velocidad, estado del motor, diagnósticos y parámetros relacionados con el combustible cuando estén disponibles a través del CAN del vehículo\) enviados como telemetría.
- Control remoto de inmovilizador / corte de motor vía comando por Internet o SMS para antirrobo y cumplimiento de alquiler.
- Control local por BLE y sensores BLE para gestión de acceso fuera de línea y flujos de trabajo basados en la proximidad.
- Registro a bordo y retención de la última posición conocida cuando GSM o GPS no están disponibles; los registros se envían a Plaspy cuando la conectividad se restablece.

## Resumen técnico

| Conectividad | 4G LTE / 3G WCDMA / 2G GSM \(celular multi-red\) |
| --- | --- |
| Bandas | Soporte global multibanda 4G/3G/2G para operación global \(variantes globales proporcionadas por el fabricante\) |
| Energía y batería | Voltaje de operación 9–40 V \(vehículos de 12V y 24V\); batería de respaldo Li‑ion recargable para alarmas por fallo de suministro y registro de respaldo |
| Interfaces | Interfaz OBD II CANBUS para lectura de datos del vehículo y emisión de comandos de control; CANBUS y salidas cableadas de doble control para cierre central, sirena, luces, claxon y corte de motor; entradas ACC/ignición y alarmas de puertas |
| GNSS | Módulo GPS con A-GPS para adquisición rápida; ubicación LBS \(torres de cel\) cuando GPS no está disponible; intervalos de subida de GPS configurables y memoria de la última posición conocida |
| Bluetooth | Bluetooth Low Energy \(BLE\) para control local fuera de línea y soporte de sensores/beacons BLE |
| Gestión remota | Actualización de firmware OTA \(GPRS\), conectividad TCP/IP para servidores privados, API abierta y control vía app/API para integración |
| Forma y tamaño | T-Box de telemática para vehículos con antenas GSM y GPS integradas; compacto y perfil de instalación oculta; el paquete incluye unidad principal, arnés de cableado y manual de usuario |

## Casos de uso

- Alquiler de coches sin personal y car sharing de autoservicio: habilita control remoto de puertas, autenticación de usuarios vía app/Bluetooth y facturación automática vinculada a datos de ignición/uso.
- Gestión de flotas y telemetría: rastrear la ubicación del vehículo, comportamiento de conducción \(sensor G\), diagnósticos OBD CANBUS y disparadores de mantenimiento a través de los tableros de Plaspy.
- Antirrobo e inmovilización: corte remoto del motor vía Internet o SMS, además de notificaciones de alarmas para puertas, activaciones del sensor de choque y eventos de pérdida de energía.
- Monitoreo de combustible y analítica operativa: enviar parámetros de combustible del CANBUS a Plaspy \(cuando estén disponibles a través del CAN del vehículo\) para soportar el monitoreo de combustible y reportes por viaje.
- Control local/offline y flujos de trabajo basados en proximidad: desbloqueo local por BLE o acceso para alquileres a corto plazo y escenarios de entrada sin llaves sin depender exclusivamente de la cobertura celular.

## Por qué elegir este rastreador con Plaspy

El CC-338 es una opción práctica para operadores que necesitan un rastreador GPS compatible con Plaspy que combine una telemetría vehicular rica con canales de control flexibles. Su acceso integrado a OBD II CANBUS ofrece datos detallados del vehículo para diagnóstico, monitorización de combustible cuando esté disponible y flujos de trabajo basados en el uso. Múltiples vías de control —app/API, BLE, salidas cableadas y SMS— permiten diseñar experiencias sólidas de antirrobo y car-sharing que funcionan tanto en tiempo real como en modo offline.

Para gestores de flota e integradores, el amplio rango de voltaje, el registro a bordo, las actualizaciones OTA y la API abierta reducen la fricción de despliegue y disminuyen los costos de mantenimiento a largo plazo. Ya sea que gestione una flota de alquiler, una plataforma de car sharing o necesite inmovilización antirobo, emparejar el CC-338 con Plaspy ofrece seguimiento en tiempo real escalable, telemetría accionable y control remoto seguro para mantener los vehículos bajo una supervisión operativa eficiente.

Plataformas de demostración del fabricante disponibles \(demostración de control en la nube en https://www.999gps.com — cuenta: test / contraseña: 123456; demostración de alquiler de coches en http://rent.999gps.com — cuenta: carsharing / contraseña: 123456\) para integradores que evalúen la integración de rastreadores GPS compatibles con Plaspy y flujos de trabajo de API.

