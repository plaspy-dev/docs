---
slug: /sinotrack/st_902l
id: st_902l
sidebar_label: ST-902L
sidebar_class_name: menu_item_tracker
---
# SinoTrack - ST-902L

![ST-902L](./tracker.jpg)

El SinoTrack ST-902L es un compacto rastreador GPS 4G para OBD II diseñado para automóviles y vehículos ligeros. Instalación plug-and-play a través de cualquier puerto OBD de 16 pines estándar, el ST-902L ofrece seguimiento en tiempo real y telemetría del vehículo de forma confiable, equipado con un chip GNSS UBLOX7020, batería de respaldo integrada y soporte para redes 4G LTE y GSM/GPRS. Para gestores de flotas y propietarios que utilizan Plaspy, el ST-902L puede configurarse para reenviar datos de ubicación en tiempo real y alarmas a la plataforma de Plaspy mediante la configuración de la IP y el puerto del servidor del dispositivo, lo que permite una implementación compatible con Plaspy de inmediato sin necesidad de cableado.

Ideal para la gestión de flotas, monitoreo anti-robo y supervisión del conductor, el ST-902L combina una instalación sencilla con funciones avanzadas de alarmas e informes. Utilice una SIM de datos local \(no incluida\) y configure APN y parámetros del servidor mediante SMS o las instrucciones de configuración del fabricante para integrarlo con Plaspy, logrando seguimiento continuo en tiempo real, alertas por geocerca y telemetría basada en eventos.

## Características clave

- Instalación OBD II plug-and-play — no se requieren cables para incorporar rápidamente el vehículo.
- Compatible con Plaspy — la configuración del IP/puerto del servidor y la configuración por SMS permiten reenviar datos de seguimiento a Plaspy para seguimiento en tiempo real y gestión de flotas.
- Rendimiento GNSS preciso con el chip UBLOX7020 y una precisión típica de ubicación de ~10 metros para fijaciones de posición confiables.
- Conectividad 4G LTE y GSM/GPRS para seguimiento continuo, con SMS como respaldo para configuración y alertas.
- Batería de respaldo integrada de 150 mAh para operación limitada y detección de manipulación cuando se desconecta la alimentación OBD.
- Soporte de eventos y alarmas: geocerca, sobrevelocidad y golpes, y notificaciones de batería baja para un monitoreo proactivo del vehículo.
- Acceso gratuito de por vida a la app SinoTrack PRO y al portal web; admite gestión de cuentas multi-dispositivo y activación sencilla.

## Cómo funciona con Plaspy

El ST-902L envía paquetes de ubicación y eventos a través de redes celulares a una IP y puerto de servidor configurables. Para integrarlo con Plaspy, configure la dirección del servidor del dispositivo a su endpoint de ingesta de Plaspy \(el ST-902L admite configuración de IP y puerto del servidor vía SMS\). Una vez apuntado a Plaspy, el dispositivo transmite actualizaciones de posición y alarmas para seguimiento en tiempo real, reproducción histórica e informes de flota.

- Actualizaciones de ubicación y telemetría en tiempo real a través de 4G LTE / GPRS hacia Plaspy.
- Alertas de geocerca y alarmas por sobrevelocidad y golpes entregadas como eventos inmediatos a los paneles de control y notificaciones de Plaspy.
- Detección de manipulación y alertas de batería baja activan alarmas en Plaspy cuando se retira la alimentación OBD o cuando caen los niveles de la batería de respaldo.
- Configuración por SMS para APN, IP y puerto del servidor — útil para el aprovisionamiento inicial y ajustes específicos por país antes de registrarse en Plaspy.
- Funciona con las funciones de gestión de flotas de Plaspy para despacho, historial de rutas y monitorización de múltiples vehículos una vez que el dispositivo se apunte al servidor de Plaspy.

## Visión general técnica

| Fabricante y modelo | SinoTrack ST-902L |
| --- | --- |
| Conectividad | 4G LTE y GSM/GPRS \(soporta informes TCP/UDP y comandos por SMS\) |
| Bandas | No se especifican explícitamente en el resumen del producto; admite redes 4G y GSM comunes — consulte al fabricante para variantes regionales de bandas |
| Alimentación y batería | Alimentado a través del puerto OBD II del vehículo; batería de respaldo integrada de 150 mAh / 3.7 V para operación limitada y detección de manipulación |
| Interfaces | Conector OBD II estándar de 16 pines; configuración por SMS para APN, IP/PUERTO del servidor y comandos de activación; no se listan I/O cableados separados |
| GNSS | Chip UBLOX7020; sensibilidad -159 dB; precisión típica de ubicación ~10 metros \(2D RMS\); precisión de sincronización de tiempo ~1 microsegundo |
| Bluetooth | No se reporta soporte de sensores Bluetooth ni BLE para este modelo |
| Gestión remota | Compatible con la app móvil SinoTrack PRO y el portal web \(servidor VIP.SINOTRACK, puerto 8090\); configuración remota por SMS. FOTA no especificado. |
| Ambiental | Temperatura de funcionamiento -20° a 55°C; humedad 5% a 95% sin condensación |
| Factor de forma | Dispositivo compacto enchufable OBD II para coches y vehículos ligeros |
| Garantía | Garantía del fabricante de 2 años |
| SIM y cumplimiento | Tarjeta SIM no incluida — el cliente debe proporcionar una SIM de datos local con APN correcto; algunos países requieren registro de IMEI \(documentos del fabricante indican verificación/cambio de IMEI vía SMS cuando es compatible\) |

## Casos de uso

- Gestión de flotas para vehículos ligeros y taxis — instalación rápida de OBD II para un despliegue homogéneo de la flota y monitorización centralizada con Plaspy.
- Alertas anti-robo y de manipulación — detección de manipulación y eventos de batería de respaldo notefican a los responsables a través de Plaspy en tiempo real.
- Comportamiento y seguridad del conductor — alertas de sobrevelocidad y golpes ayudan a detectar conducción riesgosa y respaldar procesos de coaching del conductor.
- Seguimiento de vehículos de alquiler y leasing — la instalación plug-and-play OBD II permite activación rápida y verificaciones de devolución con historial de ubicación.
- Cumplimiento simple y registro de ubicaciones — use Plaspy para archivar viajes, vigilar rutas y generar informes a partir de la telemetría del dispositivo.

## Por qué elegir este rastreador con Plaspy

El SinoTrack ST-902L ofrece un equilibrio práctico entre precisión, sencillez y compatibilidad para usuarios de Plaspy. Su diseño OBD II plug-and-play minimiza el tiempo de instalación y los costos de despliegue de la flota, mientras que el rendimiento GNSS UBLOX7020 garantiza fijaciones de posición fiables para el seguimiento en tiempo real. Dado que el dispositivo admite configuración configurable de IP y puerto del servidor, además de la puesta en marcha APN por SMS, puedes dirigir los datos del dispositivo a Plaspy de forma rápida y segura sin hardware adicional.

Elija el ST-902L con Plaspy cuando necesite un rastreador GPS compacto y confiable para automóviles y vehículos ligeros que admita telemetría, geocercas y eventos de alarma, y detección de manipulación, todo respaldado por una garantía de dos años y acceso a la plataforma proporcionada por el fabricante para una gestión de flotas y monitoreo anti-robo simplificados. Para la activación e integración con Plaspy, siga los comandos de configuración por SMS y el manual de usuario para establecer APN y los detalles del servidor antes de registrar los dispositivos en su cuenta de Plaspy.

