---
slug: /tk_star/tk103/protocol
id: tk103-protocol
sidebar_label: Protocol
title: TK-Star - TK103 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo TK-Star TK103 y cómo se comunica con Plaspy para rastreo y alertas
keywords:
  - protocolo TK Star TK103
  - protocolo GPS TK103
  - comunicación rastreador GPS TK Star
  - compatibilidad TK103 Plaspy
  - protocolo de rastreo TK103
  - protocolo rastreador TK Star
  - rastreo vehicular TK103
  - gestión de flotas TK103
  - protocolo rastreador GPS Plaspy
  - guía de comunicación TK103
---

# TK-Star - Protocolo TK103

Esta página describe el contexto público del protocolo para usar el rastreador GPS vehicular TK-Star TK103 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, qué esperar de los ajustes de conexión y cómo el comportamiento del protocolo influye en los reportes y alertas, sin exponer detalles privados o sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando una unidad reporta a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es normal encontrar diferencias entre unidades individuales y a lo largo del tiempo.

## Resumen del protocolo

El protocolo de comunicación del TK103 regula cómo el dispositivo informa ubicación, estado y alertas a una plataforma en línea como Plaspy, y cómo se aplican comandos remotos o cambios de configuración. Esta sección explica el papel público del protocolo en la integración con Plaspy más que los formatos de trama de bajo nivel.

- Permite el envío periódico de ubicación y estado del TK103 a Plaspy, de modo que la plataforma disponga de posición, movimiento y datos de sensores.
- Transporta notificaciones de eventos como alertas de movimiento, exceso de velocidad, violaciones de geocerca y pulsadores de emergencia hacia el servidor.
- Soporta flujos de control remoto y configuración que expone el dispositivo, por ejemplo control remoto de alimentación o circuitos y actualizaciones de la IP y puerto del servidor.
- Funciona sobre datos celulares usando GPRS aprovechando la capacidad del equipo para apuntar a un endpoint de servidor específico para plataformas en línea.
- Permite que el rastreador se identifique e incluya la información que Plaspy necesita para asociar los mensajes con el registro de dispositivo correspondiente.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint compartido y detecta automáticamente el protocolo del rastreador para los dispositivos que reportan a la plataforma. En la mayoría de las configuraciones, usted no necesita seleccionar un protocolo manualmente dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy utiliza el mismo puerto para todos los dispositivos y el puerto configurado es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan mensajes al endpoint compartido y asocia el tráfico con el dispositivo correcto.
- Si una unidad está correctamente configurada para enviar sus datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy recibirá y procesará los reportes sin necesidad de seleccionar el protocolo manualmente en la mayoría de los casos.
- Usted debe asegurarse de que el dispositivo esté configurado para enviar al endpoint de Plaspy y que la conectividad de red desde el rastreador hacia Internet funcione correctamente.

## Transporte y contexto de conexión

El TK103 puede configurarse para comunicarse sobre distintas capas de transporte IP según el soporte del dispositivo y la configuración. Plaspy acepta conexiones de dispositivos que usen los ajustes de transporte compartidos descritos a continuación.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los rastreadores pueden apuntar al endpoint de Plaspy por dominio d.plaspy.com o por la dirección IP 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, por lo que una configuración de servidor consistente simplifica la incorporación.
- El TK103 soporta cambiar la IP y el puerto del servidor desde el equipo, lo que se usa comúnmente para cambiar de plataforma en línea.
- Pruebe la conectividad después de modificar los ajustes del servidor para confirmar que el dispositivo alcanza Plaspy con el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y las actualizaciones del fabricante pueden cambiar el timing de mensajes, la disponibilidad de campos o las funciones soportadas; verifique el comportamiento para el firmware exacto de su unidad.
- Las revisiones de hardware a veces introducen o eliminan funciones que afectan los datos que el rastreador informa.
- El TK103 puede configurarse para usar distintos tipos de transporte; confirme que el transporte del dispositivo coincida con la configuración del endpoint de Plaspy (UDP o TCP en el puerto 8888).
- Configuraciones del lado del fabricante u opciones adicionales (por ejemplo configuraciones por SMS) pueden afectar cómo el dispositivo se registra con una plataforma en línea.
- Confirme los ajustes de reporte del dispositivo después de un restablecimiento de fábrica o una actualización de firmware, ya que la IP y el puerto del servidor pueden volver a valores por defecto.
- Valide la compatibilidad contra la documentación oficial de TK-Star y el comportamiento real del dispositivo en pruebas controladas antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK103 ayuda a asegurar reportes confiables, alertas correctas y una resolución de problemas más eficiente al integrarlo con Plaspy. Estar al tanto del transporte y la configuración a nivel de dispositivo reduce el tiempo de puesta en marcha y evita problemas comunes de conectividad.

- Asegura que usted configure el rastreador para apuntar al endpoint de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888 para que los datos lleguen a la plataforma.
- Ayuda a diagnosticar reportes faltantes revisando la selección de transporte (UDP frente a TCP) y la alcanzabilidad de red del dispositivo.
- Aclara cómo se espera que las alertas de emergencia, notificaciones de movimiento y eventos de geocerca fluyan hacia Plaspy.
- Permite planificar cambios de firmware o de dispositivo que podrían alterar qué campos se reportan o con qué frecuencia se envían actualizaciones.
- Mejora la preparación operativa al usar comandos remotos como controles de alimentación o circuitos que el dispositivo expone.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star TK103 con Plaspy ofrece una forma centralizada de monitorear la ubicación del vehículo, recibir alertas y gestionar tareas operativas para flotas o unidades individuales. El modelo de endpoint compartido y la detección automática de protocolos de Plaspy reducen los pasos de configuración manual y ayudan a que los equipos empiecen a reportar rápidamente.

Para saber más sobre Plaspy y cómo funciona con una amplia gama de rastreadores, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento de firmware y los detalles de implementación de los dispositivos pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo y las recomendaciones de firmware en el sitio del fabricante https://www.tk-star.com/ antes del despliegue.
