---
slug: /sinotrack/st_901
id: st_901
sidebar_label: ST-901
sidebar_class_name: menu_item_tracker
---
# SinoTrack - ST-901

![ST-901](./tracker.jpg)

El ST-901 4PIN Tracker de SinoTrack es un rastreador GPS por cable compacto e impermeable, diseñado para motocicletas, scooters, automóviles y camiones ligeros. Construido para una instalación discreta y reportes celulares fiables, el ST-901 ofrece posicionamiento GPS/GPRS/SMS, alertas de geocerca y exceso de velocidad, detección de encendido ACC y una batería interna de respaldo para alarmas de desconexión de la alimentación. Su simple cableado de 4 pines y el soporte de relé externo permiten a gestores de flotas y propietarios de vehículos añadir corte remoto del motor \(inmovilizador\) para protección antirrobo.

Compatible con Plaspy listo para usar cuando se configure para reportar a un servidor de terceros; el ST-901 se integra con plataformas de rastreo en la nube mediante reportes estándar GPRS/SMS. Configure el dispositivo con comandos SMS para indicar la IP y el puerto del servidor de Plaspy, y obtendrá seguimiento en tiempo real, telemetría e alertas en Plaspy junto con la plataforma web y móvil gratuita de SinoTrack. Esto convierte al ST-901 en una opción práctica y rentable para la gestión de flotas y despliegues de seguridad de vehículos que requieren actualizaciones de posición fiables y inmovilización remota.

## Key Highlights

- Compatibilidad con Plaspy: configure la IP/puerto del servidor y APN mediante SMS para reportar ubicación en tiempo real y alertas a Plaspy.
- Diseño compacto e impermeable para una instalación fácil y discreta en motocicletas, scooters, automóviles y camiones.
- Soporte de inmovilizador remoto a través de una interfaz de 4 pines y un relé externo para el control remoto del motor/circuito de combustible — ideal para la respuesta ante robos.
- Posicionamiento GPS/GPRS en tiempo real, junto con alertas por SMS con enlaces de Google Maps para compartir rápidamente la ubicación.
- Telemetría central y alarmas de seguridad: detección ACC \(encendido\), alarma de corte de alimentación principal \(batería interna\), alarmas de geocerca y de exceso de velocidad.
- Antenas GPS y GSM de alta sensibilidad integradas para optimizar las conexiones satelitales y la fiabilidad del enlace celular en entornos vehiculares típicos.
- Plataforma web gratuita y aplicación móvil \(SinoTrack PRO\) para monitorización adicional; puede configurarse para trabajar con Plaspy para una gestión consolidada de la flota.

## How It Works with Plaspy

El ST-901 transmite datos de posición y eventos de alarma mediante modos estándar GPS/GPRS/SMS. Para integrarlo con Plaspy, configure la IP del servidor, el puerto y el APN del dispositivo mediante los comandos SMS del fabricante para que el rastreador envíe sus paquetes al endpoint de ingesta de Plaspy. Una vez conectado, Plaspy recibe la ubicación, el estado y los mensajes de alarma para seguimiento en tiempo real, informes y alertas basadas en reglas.

- Actualizaciones de ubicación y telemetría en tiempo real: las coordenadas GPS se envían vía GPRS al servidor configurado para el seguimiento en vivo en Plaspy.
- Estado de encendido \(ACC\) y alarma de alimentación: la detección ACC informa sobre el encendido/apagado; la batería interna activa alertas ante la pérdida de la alimentación.
- Brechas de geocerca y violaciones de velocidad: generan eventos inmediatos para Plaspy y notificaciones por SMS.
- Inmovilizador remoto \(corte del motor\): conecte un relé externo a través de la interfaz de 4 pines para habilitar el control remoto del motor o del circuito de combustible para acciones anti‑robo.
- Conmutación por SMS y alertas directas: la unidad puede enviar alertas por SMS \(incluidos enlaces de Google Maps\) cuando se requiere una notificación inmediata o cuando GPRS no está disponible.
- Activación y consideraciones de IMEI: configure mediante comandos SMS \(IP/puerto del servidor y APN\). Tenga en cuenta que pueden aplicarse reglas locales de registro de IMEI en algunos países y el dispositivo admite comandos de lectura/cambio de IMEI conforme a las indicaciones del fabricante.

## Technical Overview

| Modelo | ST-901 4PIN Tracker |
| --- | --- |
| Fabricante | SinoTrack |
| Conectividad | 2G GSM; modos de posicionamiento GPS/GPRS/GSM/SMS |
| Bandas | 2G GSM \(las bandas/variantes específicas dependen del modelo/región\) |
| Alimentación y Batería | Conectado al suministro principal del vehículo; batería de respaldo interna para alarma de desconexión de la alimentación \(capacidad no especificada\) |
| Interfaces | Interfaz cableada de 4 pines; entrada de detección ACC \(encendido\); control de relé externo para corte remoto del motor/inmovilizador; cableado a los circuitos de alimentación y ACC |
| GNSS | Antena y receptor GPS de alta sensibilidad integrados \(posicionamiento GPS; precisión no especificada\) |
| Bluetooth | No Bluetooth reportado / no especificado |
| Gestión Remota | Comandos de configuración por SMS para IP/puerto/APN; plataforma web SinoTrackPro gratuita y app para iOS/Android para monitorización |
| Formato | Módulo cableado compacto e impermeable para montaje en vehículo \(motocicleta, scooter, automóvil, camión\) |

## Use Cases

- Gestión de flotas: rastrear vehículos en tiempo real con Plaspy para supervisión de rutas, monitoreo de conductores y telemetría básica.
- Protección antirrobo: inmovilizar de forma remota un vehículo activando un relé externo conectado al ST-901 para cortar el encendido o el circuito de combustible cuando se detecta un evento de robo.
- Seguridad para dos ruedas: instalación discreta e impermeable en motocicletas y scooters para proporcionar seguimiento de ubicación y alertas de corte de alimentación cuando un factor de forma compacto es esencial.
- Operaciones impulsadas por alarmas: reciba alarmas de geocerca, desconexión de la alimentación y exceso de velocidad en Plaspy y por SMS para una respuesta rápida ante incidentes.
- Notificación de respaldo: utilice alertas por SMS \(con enlaces de Google Maps\) para compartir rápidamente la ubicación del vehículo cuando la conectividad de datos es limitada.

## Why Choose This Tracker with Plaspy

El ST-901 combina un diseño compacto, discreto y resistente al agua con entradas prácticas orientadas a vehículos y una opción de relé para inmovilización, ofreciendo capacidades fiables de anti‑robo y gestión de flotas. Su soporte para reportes estándar GPS/GPRS/SMS y configuración basada en SMS facilita dirigir el dispositivo a los servidores de Plaspy para que tu flota u operaciones de seguridad reciban seguimiento en tiempo real, estado de encendido, alarmas de pérdida de energía y eventos de geocerca/exceso de velocidad. Para equipos que necesitan telemetría simple pero efectiva y control del inmovilizador sin instalaciones complejas, el ST-901 es una opción fiable y rentable, respaldada por la plataforma gratuita y las apps móviles de SinoTrack y el soporte del fabricante para activación, diagramas de cableado y gestión de IMEI cuando sea necesario.

