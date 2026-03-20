---
slug: /sinotrack/st_901m/features
id: st_901m-features
sidebar_label: Features
title: SinoTrack - ST-901M Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS SinoTrack ST-901M y su integración con Plaspy para seguimiento vehicular y reportes de eventos
keywords:
  - SinoTrack ST-901M
  - Funciones SinoTrack ST-901M
  - Rastreador GPS SinoTrack
  - Compatibilidad ST-901M con Plaspy
  - Rastreador GPS vehicular cableado
  - Rastreador con detección de ignición
  - Seguimiento GPRS y SMS
  - Rastreador con alarma de exceso de velocidad
  - Inmovilizador por relé externo
  - Dispositivo para gestión de flotas
---

# SinoTrack - ST-901M: Funciones

Esta página ofrece un resumen público de las capacidades del SinoTrack ST-901M y describe cómo el dispositivo puede integrarse con Plaspy para el seguimiento de vehículos y la generación de reportes de eventos. Se enfoca en las funciones visibles para el usuario, cómo se presentan en una plataforma de monitoreo y qué esperar al integrar el rastreador con Plaspy para telemetría en vivo y supervisión operativa.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Cuando procede, esta página destaca las capacidades documentadas del ST-901M y recomienda verificar los detalles específicos con la documentación oficial del fabricante.

## Resumen de funciones

El ST-901M es un rastreador GPS cableado diseñado para instalación fija en automóviles, motocicletas, ATVs y vehículos similares. Reporta posición GNSS y telemetría clave a plataformas de monitoreo mediante datos celulares o SMS, y soporta entradas configurables y alarmas útiles para la gestión de flotas y la protección anti robo.

- Informes de posición GNSS en tiempo real enviados por GPRS con respaldo por SMS para mayor resiliencia de conectividad.
- Detección de ignición (ACC) para distinguir estados de conducción y estacionamiento y activar reportes por eventos.
- Alarma configurable por exceso de velocidad y alertas a números autorizados para eventos de seguridad y conductores.
- Intervalos de reporte configurables distintos para estados en movimiento y estacionados, equilibrando frecuencia de actualización y consumo de datos.
- Soporte para relé externo para inmovilizador remoto opcional o corte de alimentación.
- Configuración vía SMS, incluyendo APN y parámetros de servidor para apuntar el dispositivo a una plataforma de terceros como Plaspy.

## Características principales del SinoTrack ST-901M

- Instalación cableada para despliegues en vehículos, incluyendo autos, motocicletas y ATVs.
- Reporte de posición GNSS para visibilidad de la ubicación en tiempo real.
- Informes por datos GSM GPRS con SMS como canal alternativo de reporte.
- Entrada ACC de ignición para informar el estado encendido/apagado del vehículo y dirigir la lógica de informes.
- Alarma por exceso de velocidad y alertas a números autorizados para monitoreo de conductores y seguridad.
- Intervalos de reporte configurables para operación en movimiento vs detenido.
- Conector para relé externo que permite un inmovilizador remoto o control de alimentación cuando está instalado.
- Configuración por comandos SMS para APN, ajustes del servidor de la plataforma y configuración remota básica.

## Cómo funcionan estas funciones con Plaspy

Cuando se configura para enviar datos a Plaspy, el ST-901M reenvía actualizaciones de ubicación y mensajes de eventos para que la posición del vehículo, su estado y las alarmas sean visibles desde la interfaz de Plaspy. Plaspy ingiere la telemetría del rastreador para ofrecer mapeo en tiempo real, indicadores de estado e historial de eventos para los equipos de operaciones y seguridad.

- Las actualizaciones de ubicación en vivo aparecen en los mapas de Plaspy para que los vehículos puedan ser rastreados casi en tiempo real.
- El estado de ignición está disponible en Plaspy para diferenciar entre conducción y estacionamiento y para soportar reglas de reporte.
- Las alertas por exceso de velocidad y por números autorizados se registran como eventos que Plaspy almacena y puede usar para activar notificaciones.
- Diferentes intervalos de reporte para movimiento y detenido reducen datos innecesarios manteniendo la fidelidad de ubicación útil en Plaspy.
- Acciones de inmovilización remota mediante un relé externo pueden coordinarse a través de mensajería plataforma a dispositivo cuando se admite el reenvío de comandos desde la plataforma.
- El registro del dispositivo mediante IMEI y la configuración por SMS permiten vincular el rastreador a una cuenta de Plaspy sin acceso físico tras la instalación.

## Casos de uso típicos

- Gestión de flotas para pequeñas y medianas flotas que requieren ubicación en vivo y telemetría consciente de la ignición.
- Monitoreo anti robo con reporte de alarmas y opción de inmovilización por relé para detener el uso no autorizado.
- Programas de comportamiento y seguridad del conductor que usan eventos de exceso de velocidad e ignición para identificar patrones de riesgo.
- Rastreo de activos en motocicletas y ATVs con instalaciones cableadas y reportes configurables.
- Inmovilización remota de vehículos recuperados mediante relé externo controlado desde la plataforma de monitoreo.
- Despacho y supervisión operativa donde la posición en tiempo real y el estado del motor mejoran la respuesta y la utilización.

## Notas sobre disponibilidad de funciones

- Las funciones exactas dependen de la versión de firmware del ST-901M y la revisión de hardware suministrada por el fabricante.
- El cableado de instalación y la presencia de hardware opcional, como un relé externo, determinan qué capacidades son utilizables.
- El comportamiento celular y la configuración del APN están sujetos a las políticas de los operadores regionales y a la configuración de SIM/APN aplicada en la instalación.
- Algunas funciones, como detalles de batería de respaldo y precisión GNSS exacta, figuran como no especificadas en los materiales disponibles y deben confirmarse con el fabricante.
- Variantes regionales del fabricante o builds OEM personalizados pueden cambiar las entradas disponibles, alarmas o conectores.

## Por qué usar Plaspy con estas funciones

Usar el SinoTrack ST-901M con Plaspy ofrece a las organizaciones una vía directa para ingerir ubicación en vivo y telemetría de eventos desde rastreadores vehiculares cableados. Plaspy puede presentar la posición, el estado de ignición y las alarmas configuradas en paneles y registros de eventos que soportan la optimización de flotas, flujos de trabajo de seguridad y reportes operativos sin requerir middleware adicional.

Si desea conocer más sobre cómo Plaspy trabaja con dispositivos como el ST-901M, visite https://www.plaspy.com para explorar las funciones de la plataforma y las opciones de despliegue. Para los detalles específicos más actuales del dispositivo, notas de firmware y guías de instalación, consulte al fabricante en https://www.sinotrackgps.com/ ya que el comportamiento y las especificaciones del dispositivo pueden cambiar con el tiempo.
