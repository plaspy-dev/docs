---
slug: /castel/pt_690/protocol
id: pt_690-protocol
sidebar_label: Protocol
title: Castel - PT-690 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del Castel PT-690 y cómo se conecta con Plaspy para rastreo GPS e integración del dispositivo
keywords:
  - Castel PT-690
  - protocolo PT-690
  - rastreador GPS Castel PT-690
  - protocolo de comunicación PT-690
  - compatibilidad Castel Plaspy
  - protocolo rastreador GPS para mascotas
  - protocolo rastreador GSM GPRS GPS
  - detección de protocolo Plaspy
  - integración de dispositivo Plaspy
  - protocolo de rastreo PT-690
---

# Castel - Protocolo PT-690

Esta página describe el contexto público del protocolo para usar el rastreador Castel PT-690 con la plataforma Plaspy. Se enfoca en cómo el equipo se comunica mediante datos móviles y GPS, y en qué debe fijarse al configurar el rastreador para que reporte a Plaspy la ubicación y el monitoreo de mascotas.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo empieza a enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo y los detalles de los reportes pueden variar según la versión de firmware del PT-690, la revisión de hardware y la implementación del fabricante, por lo que se recomienda validar el comportamiento del equipo con la documentación del fabricante y las notas de firmware vigentes.

## Visión general del protocolo

El protocolo de comunicación del PT-690 regula cómo el rastreador envía información de posición, estado y alertas desde el dispositivo hacia un servidor remoto. En la práctica, este protocolo permite que el rastreador se identifique, reporte posiciones GPS y datos de movimiento, y entregue información auxiliar como nivel de batería y eventos de geocerca a Plaspy.

- Permite reportes periódicos o por eventos sobre la posición GPS y el estado del dispositivo hacia un servidor remoto.
- Transporta información de identidad para que Plaspy asocie los reportes entrantes con un dispositivo PT-690 específico.
- Envía telemetría como la ubicación, estado de movimiento, alertas de batería y estados básicos de sensores usados en monitoreo y alertas.
- Funciona sobre la conexión móvil GSM GPRS para reenviar ubicación y telemetría a un endpoint en la nube.
- Permite configurar el equipo para que reporte a Plaspy y así se pueda realizar la detección automática del protocolo.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes de dispositivos en un endpoint compartido y utiliza esa conexión para identificar el protocolo del rastreador sin requerir, en la mayoría de los casos, la selección manual del protocolo. Cuando un PT-690 se configura para enviar reportes a Plaspy, la plataforma coteja el flujo entrante con un parser compatible y asocia el equipo a una cuenta de Plaspy.

- Configure los dispositivos para que reporten a la dirección del servidor d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía datos al endpoint de la plataforma.
- Normalmente usted no necesita seleccionar un protocolo específico dentro de Plaspy si el rastreador reporta correctamente al endpoint de Plaspy.
- Una identidad de dispositivo correcta y reportes confiables permiten a Plaspy vincular los mensajes entrantes con la unidad PT-690 correspondiente.
- Si los reportes no llegan a Plaspy, verifique la configuración del APN y los ajustes de reporte en el equipo y confirme que el dispositivo puede usar el transporte seleccionado.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el PT-690 entrega sus mensajes de protocolo a Plaspy. El PT-690 puede configurarse para usar UDP o TCP según el firmware del equipo y las opciones de configuración disponibles. Plaspy escucha en un único puerto para todos los dispositivos compatibles para simplificar la configuración.

- Plaspy recibe los datos de los rastreadores en el puerto 8888 y todos los dispositivos soportados usan este mismo puerto.
- Al configurar la dirección de reporte, los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- El PT-690 puede configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del equipo y la configuración del usuario.
- Elija UDP cuando el firmware recomiende reportes ligeros y sin conexión, o TCP si la configuración del rastreador requiere un transporte orientado a conexión.
- Asegúrese de que los ajustes de APN de datos móviles sean correctos para que el rastreador pueda establecer conexión con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El comportamiento del PT-690 puede variar con las versiones de firmware; verifique la versión de firmware al diagnosticar diferencias en el protocolo o en los reportes.
- Las revisiones de hardware y las opciones de configuración de fábrica pueden afectar qué modos de transporte y formatos de reporte están disponibles.
- Los ajustes predeterminados del fabricante pueden apuntar el rastreador al servicio del proveedor; actualice el host de reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para usar Plaspy.
- Las condiciones de red, la configuración del APN y las limitaciones del plan de la SIM pueden influir en la fiabilidad y frecuencia de los reportes.
- Al cambiar entre UDP y TCP, confirme que el rastreador soporte el modo elegido y que Plaspy sea accesible desde la red del dispositivo.
- Valide la compatibilidad con la documentación de Castel para comandos específicos del equipo, métodos de configuración y notas sobre cambios de firmware.

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación del rastreador ayuda a asegurar una configuración fluida, operación confiable y solución de problemas más eficiente al usar el PT-690 con Plaspy. Conocer cómo reporta el equipo y qué información proporciona reduce el tiempo de puesta en marcha y mantiene una visibilidad de ubicación consistente.

- Le ayuda a configurar correctamente el host de reporte y el transporte para que los datos lleguen a Plaspy de forma confiable.
- Facilita la solución de problemas cuando los reportes no llegan o la plataforma no reconoce la identidad del dispositivo.
- Orienta sobre los intervalos de reporte, la gestión de energía y la frecuencia con que el rastreador despierta para enviar datos.
- Permite interpretar con precisión la telemetría del dispositivo que se muestra en los paneles y alertas de Plaspy.
- Minimiza el tiempo dedicado a ajustar configuraciones al alinear la configuración del equipo con las expectativas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Castel PT-690 con Plaspy ofrece un endpoint en la nube único para recopilar reportes de ubicación y estado de rastreadores para mascotas, lo que permite a organizaciones y propietarios centralizar monitoreo y alertas en una sola plataforma. La detección automática de protocolos y el puerto unificado de Plaspy simplifican la incorporación de dispositivos cuando el PT-690 se configura para reportar al endpoint de Plaspy.

Si desea obtener más información sobre Plaspy y cómo maneja la integración de dispositivos y el rastreo, visite https://www.plaspy.com. Para detalles de protocolo o firmware más actuales y específicos del dispositivo Castel PT-690, confirme la información en el sitio del fabricante http://www.castelecom.com/ ya que el comportamiento del protocolo y las implementaciones de firmware pueden cambiar con el tiempo.
