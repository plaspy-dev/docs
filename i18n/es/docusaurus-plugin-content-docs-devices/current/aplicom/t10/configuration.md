---
slug: /aplicom/t10/configuration
id: t10-configuration
sidebar_label: Configuration
title: Aplicom - T10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Aplicom T10 con Plaspy, incluye ajustes de servidor y lista de verificación de instalación
keywords:
  - Configuración Aplicom T10
  - Instalación Aplicom T10
  - Aplicom T10 en Plaspy
  - Configuración rastreador GPS Aplicom
  - Configuración servidor T10
  - Instalación software seguimiento T10
  - Seguimiento de flotas Aplicom T10
  - Configuración telemetría Aplicom T10
  - Integración Aplicom T10
  - Configuración dispositivo Aplicom
---

# Aplicom - Configuración del T10

Esta página describe los aspectos públicos de configuración necesarios para usar el rastreador Aplicom T10 con Plaspy. Resume los ajustes de servidor compartidos y públicos que permiten enrutar la telemetría del dispositivo hacia Plaspy, y expone el flujo de trabajo habitual para preparar las unidades y que sean visibles en la plataforma. La información está dirigida a administradores e integradores que tienen acceso al dispositivo y a las herramientas de configuración del fabricante.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas de proveedor empleadas, por lo que lo siguiente debe considerarse una guía general de integración basada en prácticas públicas y en la descripción del producto T10.

## Resumen de configuración

El objetivo al configurar el Aplicom T10 para Plaspy es asegurar que el dispositivo se comunique de forma fiable con el endpoint compartido de Plaspy y que la telemetría sea visible en su espacio de gestión de flotas. La configuración se centra en apuntar el dispositivo al endpoint de Plaspy, elegir el transporte correcto y validar que el equipo reporte después del cambio.

- Configure el dispositivo para enviar datos a Plaspy usando el endpoint de la plataforma d.plaspy.com o la IP del servidor Plaspy.
- Seleccione el transporte compatible con el dispositivo y con Plaspy, UDP o TCP, en el puerto 8888.
- Aplique y guarde los cambios de configuración mediante las herramientas de Aplicom o la gestión remota del dispositivo.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy con telemetría en vivo.
- Mantenga actualizado el firmware y las herramientas de gestión remota a través de Aplicom Silver Cloud cuando corresponda.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan a la plataforma

## Requisitos típicos antes de la configuración

- Alimentación física y una instalación correcta en el activo para que el equipo funcione de forma continua.
- Acceso al método de configuración oficial de Aplicom, al software o a herramientas de gestión remota como Aplicom Silver Cloud.
- Conectividad de red apropiada para la variante instalada (por ejemplo, la variante T10G admite conectividad 2G donde aplique).
- Una cuenta de Plaspy o acceso administrativo al espacio de trabajo Plaspy destinado para confirmar la incorporación del dispositivo.
- Detalles de identificación del dispositivo proporcionados por Aplicom o su instalador para ayudar a confirmar la unidad correcta durante la validación.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Aplicom T10 envía su telemetría y actualizaciones de estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe y procesa los datos entrantes, aplicando detección automática de protocolo para interpretar los mensajes del rastreador y disponibilizarlos en la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o a la IP del servidor Plaspy usando el puerto 8888.
- Plaspy acepta conexiones por UDP o TCP y selecciona la lógica de procesamiento adecuada mediante la detección automática de protocolo.
- Los informes de ubicación y la telemetría del dispositivo se reenvían a Plaspy para monitoreo en tiempo real y reportes históricos.
- Telemetría de variante, como datos CAN en modelos T10G, puede incluirse en los mensajes que envía el dispositivo cuando está configurado para ello.
- La gestión remota del dispositivo y las actualizaciones de firmware continúan gestionándose a través de Aplicom Silver Cloud mientras la telemetría fluye hacia Plaspy.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de Aplicom o al software correspondiente, o utilice Aplicom Silver Cloud para la gestión remota.
2. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 para coincidir con el puerto del servidor Plaspy utilizado por todos los dispositivos soportados.
4. Seleccione el tipo de transporte UDP o TCP si el dispositivo requiere una selección explícita de transporte.
5. Guarde o aplique los cambios de configuración usando la herramienta del fabricante y asegúrese de que cualquier despliegue remoto se haya enviado a la unidad.
6. Valide que el dispositivo reporte a Plaspy comprobando la llegada de telemetría y la presencia del dispositivo en su espacio de trabajo Plaspy.

## Notas de configuración

- Las revisiones de firmware y hardware en la familia T-Series pueden modificar los ajustes disponibles y la ubicación de los parámetros de configuración; consulte siempre la documentación vigente de Aplicom.
- Las prácticas de instalación y las variantes regionales de red, como las diferencias del modelo T10G, pueden afectar cómo provisiona la conectividad y las opciones de telemetría.
- TCP y UDP presentan compensaciones operativas; seleccione el transporte compatible con su entorno de red y la variante del dispositivo.
- Use Aplicom Silver Cloud para la configuración remota y la gestión de firmware cuando esté disponible para minimizar visitas in situ.
- Verifique que el identificador del dispositivo y cualquier metadato de incorporación requerido por su espacio Plaspy estén disponibles antes de completar la configuración.

## Por qué usar Plaspy con esta configuración

Usar el Aplicom T10 con Plaspy ofrece una vía práctica y escalable para combinar hardware robusto de campo con una plataforma centralizada para visibilidad en tiempo real y supervisión operativa. La configuración compartida del servidor Plaspy simplifica el aprovisionamiento de dispositivos porque todos los equipos compatibles apuntan al mismo endpoint y puerto, mientras Plaspy gestiona la detección automática del protocolo.

Para conocer más sobre Plaspy y cómo integrar dispositivos Aplicom visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante, verifique la documentación más reciente en https://www.aplicom.com/ ya que las especificaciones del fabricante y los flujos de trabajo de instalación pueden cambiar con el tiempo.
