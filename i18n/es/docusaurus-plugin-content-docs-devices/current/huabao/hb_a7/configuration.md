---
slug: /huabao/hb_a7/configuration
id: hb_a7-configuration
sidebar_label: Configuration
title: Huabao - HB-A7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Huabao HB-A7 con ajustes de servidor Plaspy y pasos prácticos para integrar flotas
keywords:
  - Configuración Huabao HB A7
  - Instalación Huabao HB A7
  - Configuración HB A7 Plaspy
  - Ajustes de servidor HB A7
  - Configuración rastreador GPS Huabao
  - Configuración rastreador Plaspy
  - Seguimiento vehicular HB A7
  - Configuración gestión de flotas HB A7
  - Compatibilidad rastreador GPS Plaspy
  - Guía de instalación HB A7
---

# Huabao - Configuración del HB-A7

Esta página documenta el contexto público de configuración necesario para usar el rastreador Huabao HB-A7 con la plataforma Plaspy. Se centra en los ajustes de servidor prácticos y en el flujo de trabajo que usted seguirá para conectar el HB-A7 al endpoint de ingestión de Plaspy y validar los reportes básicos. Use esta guía para saber qué valores ingresar en el dispositivo o en la herramienta de configuración del fabricante para que el HB-A7 pueda comunicarse con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor para programar el HB-A7. Siga los pasos generales a continuación y siempre contraste con los menús específicos del dispositivo o los formatos SMS/comando provistos por Huabao cuando estén disponibles.

## Resumen de configuración

El objetivo al configurar un HB-A7 para Plaspy es garantizar la entrega fiable de datos al endpoint de ingestión de Plaspy, habilitar las funciones de reporte del dispositivo y verificar la visibilidad en la plataforma. Este proceso enlaza las capacidades celulares y GNSS del HB-A7 con Plaspy para que usted pueda monitorear ubicación, alarmas y telemetría de sensores casi en tiempo real.

- Apunte el HB-A7 al endpoint del servidor Plaspy y al puerto compartido que usa Plaspy para todos los dispositivos.
- Seleccione la opción de transporte soportada por su firmware, típicamente UDP o TCP, y confirme que el puerto esté en el valor de Plaspy.
- Verifique la conectividad celular y los ajustes APN necesarios para que el dispositivo pueda abrir la sesión de datos.
- Aplique y guarde los ajustes en la herramienta del fabricante o mediante comandos al dispositivo, y reinicie si es necesario para activar la nueva configuración de servidor.
- Confirme que el dispositivo aparece en Plaspy y está enviando posiciones y actualizaciones de eventos.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el HB-A7. Estos son los valores canónicos necesarios para que el dispositivo reporte a Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device firmware and preference
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Ingrese ya sea el dominio d.plaspy.com o la IP 54.85.159.138 en la interfaz de configuración de Huabao; ambos resuelven al mismo endpoint de ingestión de Plaspy. La plataforma detectará el protocolo que use el HB-A7 después de su primera conexión.

## Requisitos típicos antes de configurar

- Una unidad HB-A7 con alimentación suficiente o instalada en el vehículo para realizar la configuración y las pruebas.
- Una tarjeta SIM activa instalada si usará datos móviles, con un plan de datos válido y el APN correcto configurado.
- Acceso al método de configuración de Huabao que planea usar, como la herramienta oficial, la interfaz web o la interfaz SMS/comando que provea el vendedor.
- Conocimiento de la versión de firmware del dispositivo y de cualquier diferencia en menús del proveedor para los ajustes de servidor, puerto y transporte.
- Un medio para monitorear el dispositivo después de la configuración, ya sea a través de Plaspy o mediante captura de paquetes/terminal para verificar la conexión saliente.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el HB-A7 envía posiciones GNSS, eventos de estado y telemetría configurada al endpoint de ingestión de Plaspy en el puerto compartido. Plaspy ingiere estos mensajes, detecta automáticamente el protocolo que utiliza el dispositivo y muestra la ubicación y los eventos en la interfaz de la plataforma para monitoreo y procesamiento de reglas.

- El HB-A7 se configura para reportar al endpoint y puerto compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El transporte de datos puede ser UDP o TCP según la opción seleccionada en la configuración.
- Los mensajes de posición y telemetría son recibidos por Plaspy, donde la plataforma mapea eventos a seguimiento en vivo y alarmas.
- Las entradas/salidas del dispositivo y la telemetría por puerto serie (por ejemplo consumo de combustible o temperatura) se transmiten a Plaspy cuando están configuradas y mapeadas.
- La detección automática de protocolo de Plaspy simplifica la integración porque la plataforma reconoce el protocolo del HB-A7 en el primer contacto.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Huabao para el HB-A7 (interfaz web del dispositivo, herramienta del proveedor o interfaz SMS/comando).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del servidor en 8888, valor requerido por Plaspy.
4. Seleccione UDP o TCP si el dispositivo solicita una selección explícita de transporte.
5. Aplique o guarde la configuración en la herramienta Huabao y confirme que los ajustes se escribieron en el dispositivo.
6. Reinicie el dispositivo si el firmware lo exige para activar los nuevos ajustes de servidor.
7. Valide que el HB-A7 reporta a Plaspy revisando la lista de dispositivos o la actividad del dispositivo en Plaspy y confirmando que llegan mensajes de posición o eventos.

## Comandos de ejemplo para configuración

El HB-A7 puede configurarse usando las herramientas del proveedor Huabao, menús en el propio dispositivo o interfaces SMS/comando según el firmware y la variante regional. La sintaxis exacta de los comandos y los menús varía según el firmware del fabricante y debe consultarse en los documentos técnicos de Huabao o en la herramienta de configuración que le proporcione su proveedor.

Si utiliza comandos SMS o estilo AT de Huabao, consulte la referencia oficial de comandos de Huabao para los formatos exactos. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888. Si su proveedor ofrece una herramienta de configuración con GUI, siga los campos de servidor, puerto y transporte en la interfaz y guarde los cambios.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de menús, el orden de los campos o la sintaxis exacta de SMS/comando; confirme siempre con las notas de la versión de firmware del HB-A7.
- Elija UDP o TCP según sus necesidades de red y el soporte del firmware del HB-A7; Plaspy aceptará cualquiera de los dos en el puerto 8888.
- Use el dominio d.plaspy.com cuando sea posible para evitar ligar el dispositivo a una única dirección IP; la IP 54.85.159.138 puede usarse donde no haya DNS disponible.
- Asegúrese de los ajustes correctos de APN en la SIM para que el HB-A7 pueda establecer la sesión de datos; consulte con el operador para los valores de APN.
- Guarde los cambios de configuración y realice un reinicio cuando la herramienta Huabao lo indique para garantizar que los nuevos ajustes entren en vigor.

## Por qué usar Plaspy con esta configuración

Configurar el HB-A7 para reportar a Plaspy ofrece un camino práctico para obtener ubicación fiable, eventos y telemetría de sensores para operaciones de flota. La ingestión y la detección automática de protocolos de Plaspy facilitan poner en línea los dispositivos HB-A7 y comenzar a usar mapas en vivo, alertas y reproducción histórica para supervisión operativa y respuesta ante incidentes.

Para saber más sobre Plaspy y cómo apoya la telemática de flotas, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles de configuración del HB-A7, consulte la documentación del fabricante en https://www.huabaotelematics.com/ para verificar procedimientos actuales y asegurar compatibilidad con su firmware e instalación.
