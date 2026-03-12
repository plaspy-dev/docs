---
slug: /sinotrack/st_905
id: st_905
sidebar_label: ST-905
sidebar_class_name: menu_item_tracker
---
# SinoTrack - ST-905

![ST-905](./tracker.jpg)

El SinoTrack ST-905 es un rastreador GPS magnético compacto, impermeable y diseñado para montaje encubierto en vehículos, bicicletas y otros activos móviles. Compatible con Plaspy cuando se configura para reportar a una IP de servidor y APN personalizados, el ST-905 combina la precisión GNSS de UBLOX con conectividad GSM/GPRS para ofrecer seguimiento en tiempo real fiable, operación de larga espera y un formato discreto para aplicaciones de antirrobo y protección de activos.

La carcasa delgada con imán y clasificación IP, junto con la batería recargable de 5000 mAh, convierten al ST-905 en un rastreador GPS de bajo mantenimiento, apto para gestión de flotas, seguimiento de actividades al aire libre y seguridad de objetos de alto valor. Configura el dispositivo por SMS para dirigir sus reportes GPRS hacia el servidor de Plaspy y utiliza el panel de control y las alertas de Plaspy para telemetría, geocercas y reportes operativos.

## Características clave

- Compatible con Plaspy — dirija el ST-905 a la IP/APN de su servidor Plaspy mediante SMS para seguimiento en tiempo real e integración con la plataforma.
- Larga duración de la batería — batería Li‑ion recargable de 3.7 V y 5000 mAh con 40–60 días en espera \(según el intervalo de reportes\) para implementaciones de bajo mantenimiento.
- Diseño magnético impermeable — imán delgado y fuerte y carcasa con clasificación IP para montaje seguro y encubierto en superficies metálicas.
- Posicionamiento GPS preciso — UBLOX UBX-G7020; ~5 m de precisión; TTFF caliente de 1 s.
- Conectividad GSM 2G global — admite las bandas 850/900/1800/1900 MHz para una cobertura amplia de GSM/GPRS donde aún estén disponibles redes 2G.
- Configuración rápida — conjunto de comandos por SMS para configurar IP/APN y comportamiento de reporte sin herramientas especiales.
- Amplio rango de temperatura y tolerancia a la humedad — diseñado para entornos exteriores y de vehículos.

## Cómo funciona con Plaspy

El ST-905 envía reportes de posición GPS y estado a través de GSM/GPRS a una dirección de servidor configurada. Para la integración con Plaspy, configure la IP y el APN del rastreador utilizando los comandos de configuración por SMS del fabricante para que el dispositivo retransmita los paquetes de ubicación a su instancia de Plaspy. Plaspy procesa luego esos paquetes para seguimiento en tiempo real, historial, alertas y reportes de flota.

- Seguimiento en tiempo real: las coordenadas GPS se transmiten por GPRS al servidor configurado para su visualización de ubicación en vivo en Plaspy.
- Enrutamiento de la plataforma: configure IP/APN vía SMS para dirigir el rastreador al punto de ingestión de Plaspy \(TCP/UDP\) o a su servidor alojado en Plaspy.
- Control de informes: ajuste la frecuencia de reporte y el comportamiento de bajo consumo mediante comandos por SMS para equilibrar la granularidad de actualizaciones y la duración de la batería.
- Monitoreo de batería y estado: use Plaspy para supervisar los niveles de batería y el estado en línea/offline reportado por el rastreador.
- Funciones de flota extensibles: una vez que el ST-905 está conectado a Plaspy, aproveche las herramientas de la plataforma para gestión de flotas, geocercas y alertas anti‑robo; puede estar disponible telemetría adicional \(encendido, combustible, inmovilizador, sensores Bluetooth\) en Plaspy cuando se use con rastreadores compatibles o adaptadores auxiliares.

## Resumen técnico

| Conectividad | GSM/GPRS \(2G\) |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz |
| Alimentación y batería | Recargable Li‑ion 3.7V; 5000 mAh; incluye cargador de pared 110–220V a 5V/1A |
| Interfaces | Configuración por SMS para IP/APN y parámetros \(no E/S externa especificada\) |
| GNSS | UBLOX UBX-G7020; ~5 m de precisión; sensibilidad -159 dBm; TTFF Frío 45 s / Tibio 35 s / Caliente 1 s |
| Bluetooth | No especificado / No reporta Bluetooth integrado |
| Gestión remota | Configurable mediante comandos SMS \(IP/APN de la plataforma, intervalo de informes\); funciona con la plataforma SinoTrack por defecto |
| Factor de forma | Carcasa magnética compacta; Dimensiones 10 × 8 × 2.5 cm; Peso 45 g; carcasa impermeable con clasificación IP |
| Ambiental | Funcionamiento -20°C a +55°C; Almacenamiento -40°C a +85°C; Humedad 5%–95% sin condensación |

## Casos de uso

- Gestión de flotas — seguimiento discreto para coches, vehículos de servicio y equipo ligero donde se prefiere un montaje magnético de perfil bajo.
- Antirrobo y recuperación — instalación encubierta en vehículos y bicicletas para ayudar a localizar activos robados y activar alertas en la plataforma.
- Protección de activos — monitorización en modo de espera prolongado de remolques, contenedores y maquinaria portátil entre despliegues.
- Seguimiento de actividades al aire libre — colóquelo en bicicletas o equipo para registrar la ubicación durante las salidas, con protección impermeable frente a condiciones meteorológicas adversas.
- Instalaciones de bajo mantenimiento — situaciones en las que la recarga poco frecuente y la configuración simple por SMS son prioritarias.

## Por qué elegir este rastreador con Plaspy

Cuando se combina con Plaspy, el SinoTrack ST-905 ofrece una ruta sencilla y rentable hacia el seguimiento GPS en tiempo real y la visibilidad de la flota. Su batería de larga duración y la carcasa magnética impermeable reducen el tiempo de instalación y el mantenimiento, mientras que el módulo GNSS UBLOX ofrece una ubicación confiable para uso contra robo y operacional. El modelo con IP/APN configurable por SMS permite a los gestores de flotas e integradores dirigir los reportes a Plaspy o a un servidor propio sin software especial, posibilitando una incorporación rápida y telemetría centralizada.

Las ventajas prácticas incluyen menor tiempo de inactividad \(largo tiempo de espera\), instalación encubierta \(imán fuerte y perfil delgado\) y flexibilidad para elegir proveedores locales de SIM/APN. Tenga en cuenta que el ST-905 es un rastreador 2G GSM y se vende sin una tarjeta SIM: confirme la disponibilidad de redes 2G y cualquier requisito regional de registro de IMEI \(en algunos países se exige el registro de IMEI; el fabricante ofrece orientación y comandos por SMS cuando sea aplicable\). Para equipos que requieren telemetría adicional como captación de eventos de encendido, monitoreo de combustible o integración de sensores Bluetooth, Plaspy suele facilitar esas métricas cuando se usa con dispositivos de rastreo compatibles o adaptadores auxiliares.

