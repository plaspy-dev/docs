---
slug: /winrich/tk_168/protocol
id: tk_168-protocol
sidebar_label: Protocol
title: Winrich - TK-168 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Winrich TK-168 y su compatibilidad con Plaspy
keywords:
  - protocolo Winrich TK-168
  - protocolo GPS Winrich TK-168
  - rastreo Winrich TK-168
  - protocolo Winrich Plaspy
  - rastreador GPS TK-168
  - rastreo de vehículos Plaspy
  - seguimiento de flotas Winrich
  - compatibilidad de rastreadores Plaspy
  - guía de protocolo de rastreador GPS
  - protocolo de comunicación de rastreadores
---

# Winrich - Protocolo TK-168

Esta página presenta una visión pública y no sensible del contexto de comunicación para usar el rastreador Winrich TK-168 con la plataforma Plaspy. Explica cómo el dispositivo puede reportar ubicación y telemetría a Plaspy y qué papel juega el protocolo de reporte del rastreador en la integración, evitando detalles de implementación que no sean de dominio público.

El TK-168 es un rastreador GPS vehicular compacto con receptor GNSS SiRF III y conectividad GSM GPRS cuatribanda. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que usted debe confirmar detalles específicos del equipo en la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte define cómo el TK-168 envía identificación, ubicación y telemetría a un servidor para que Plaspy pueda procesar y mostrar los datos. El contexto público del protocolo cubre los comportamientos observables necesarios para enrutar y aceptar los informes del dispositivo sin revelar formatos privados de análisis o binarios.

- Permite que el rastreador se identifique ante un servidor remoto para que Plaspy asocie los mensajes entrantes con la cuenta de dispositivo correcta.
- Transporta la posición GPS, la marca de tiempo y la telemetría básica necesaria para monitoreo en tiempo real, alertas y reproducción histórica.
- Soporta transporte por el canal de datos celular para que las subidas GPRS entreguen actualizaciones casi en tiempo real a Plaspy.
- Funciona junto con opciones de respaldo por SMS en entornos donde los datos no están disponibles o para la provisión inicial del dispositivo.
- Regula cómo se entregan los comandos remotos y las acciones de control emitidas desde Plaspy al dispositivo cuando el firmware lo permite.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñada para aceptar reportes de muchos modelos de rastreadores usando un único endpoint y puerto compartidos. Cuando un TK-168 correctamente configurado reporta a Plaspy, la plataforma reconoce automáticamente el protocolo del dispositivo, por lo que por lo general no es necesaria la selección manual del protocolo dentro de Plaspy.

- Todos los dispositivos reportan al mismo endpoint y puerto del servidor Plaspy, lo que simplifica la configuración para los administradores.
- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com que resuelve a la dirección del servidor Plaspy.
- La dirección IP del servidor Plaspy y el puerto de escucha se publican para mayor claridad: 54.85.159.138 y puerto 8888.
- La plataforma detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar, por lo que normalmente no se requiere seleccionar el protocolo dentro de Plaspy.
- La configuración correcta del dispositivo para apuntar a Plaspy e incluir los identificadores requeridos es el paso común durante la provisión.

## Transporte y contexto de conexión

El TK-168 puede enviar sus datos a Plaspy mediante datos celulares usando GPRS. Plaspy acepta conexiones en un único puerto, por lo que los administradores pueden configurar los dispositivos apuntando al endpoint de Plaspy y la detección del protocolo se maneja del lado del servidor.

- Los dispositivos pueden configurarse para usar UDP o TCP según lo soporte el equipo y la configuración elegida.
- El endpoint de reporte de Plaspy es d.plaspy.com y puede usarse como host del servidor en el equipo.
- Como alternativa, la dirección numérica del servidor Plaspy 54.85.159.138 está disponible para configuración en entornos con DNS restringido.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, 8888, para los reportes entrantes del rastreador.
- Use el modo de datos GPRS para actualizaciones de posición en tiempo real y el modo SMS cuando los datos no sean preferidos o no estén disponibles.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué campos de telemetría se reportan y con qué frecuencia el dispositivo envía actualizaciones de posición.
- Las revisiones de hardware o configuraciones personalizadas realizadas por instaladores pueden afectar las entradas, salidas y funciones de control remoto disponibles.
- Algunas unidades TK-168 pueden depender de SMS para ciertos comandos de control, mientras que otras aceptan comandos remotos por GPRS según el firmware.
- La elección del transporte entre UDP y TCP debe coincidir con lo que soporta el equipo y cómo se comporta el plan de datos SIM y la red.
- Valide siempre el formato de los identificadores del dispositivo y la configuración del APN durante la provisión para que los reportes se asocien correctamente en Plaspy.
- En caso de duda, confirme el comportamiento específico del equipo y los comandos soportados con la documentación del fabricante.

## Por qué es importante entender el protocolo

Conocer cómo el TK-168 se comunica con Plaspy ayuda a garantizar una configuración fluida, un reporte confiable y una resolución de problemas más rápida cuando surjan incidencias. Aunque Plaspy maneja la detección del protocolo y el enrutamiento central, estar al tanto del transporte y las diferencias de firmware evita errores comunes de configuración.

- Permite aplicar correctamente los ajustes de APN y servidor en el equipo para un reporte GPRS confiable.
- Facilita verificar que el dispositivo está alcanzando el endpoint de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a diferenciar entre causas de hardware, firmware o red cuando las actualizaciones dejan de llegar a Plaspy.
- Apoya la toma de decisiones informadas sobre el uso de UDP frente a TCP según el comportamiento del dispositivo y la red.
- Asiste a gerentes de flota y técnicos a garantizar que el equipo envíe la telemetría deseada para alertas e informes.

## Ventajas de usar Plaspy con este protocolo

Usar el TK-168 con Plaspy proporciona a los operadores visibilidad inmediata de la ubicación del vehículo y la telemetría clave a través de una sola plataforma que maneja automáticamente muchos protocolos comunes de rastreadores. La combinación del diseño compacto del TK-168 y la detección de protocolo de Plaspy reduce la complejidad de configuración en despliegues masivos y ofrece funciones básicas de gestión de flotas como seguimiento en vivo, reproducción de historial y soporte de control remoto cuando el firmware del dispositivo lo permite.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, el comportamiento del firmware y las notas de implementación del fabricante, verifique la información vigente con Winrich en http://www.winrichgroup.com/en/ ya que estos detalles pueden cambiar con el tiempo.
