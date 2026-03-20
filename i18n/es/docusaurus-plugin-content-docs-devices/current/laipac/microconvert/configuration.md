---
slug: /laipac/microconvert/configuration
id: microconvert-configuration
sidebar_label: Configuration
title: Laipac - MicroConvert Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el tracker Laipac MicroConvert a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración Laipac MicroConvert
  - Instalación Laipac MicroConvert
  - Laipac MicroConvert Plaspy
  - Configuración rastreador GPS MicroConvert
  - Configuración rastreador GPS Laipac
  - Rastreo de activos MicroConvert
  - Configuración de servidor MicroConvert
  - Configuración plataforma GPS MicroConvert
  - Configuración rastreador GPS oculto Laipac
  - Configuración rastreador Plaspy
---

# Laipac - Configuración del MicroConvert

Esta página documenta el contexto público de configuración para usar el rastreador GPS Laipac MicroConvert con Plaspy. Se centra en los ajustes prácticos de servidor que Plaspy requiere, el flujo de trabajo típico de instalación y qué debe verificar antes de integrar el dispositivo. Úsela como referencia técnica para preparar el MicroConvert y asegurar su comunicación con la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Las instrucciones exactas en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Siga la documentación del fabricante junto con la orientación general aquí para apuntar el dispositivo al endpoint de Plaspy y validar la conectividad.

## Resumen de la configuración

Configurar el MicroConvert para Plaspy consiste principalmente en dirigir el dispositivo al endpoint de Plaspy y garantizar que la unidad pueda comunicarse por la red celular. El objetivo es establecer reportes confiables para que el dispositivo sea visible y manejable en Plaspy con el mínimo esfuerzo del instalador.

- Apunte el MicroConvert al endpoint del servidor de Plaspy para que envíe datos de ubicación y eventos.
- Asegúrese de que el dispositivo tenga batería cargada y conectividad celular activa adecuada para reportes GSM GPRS.
- Seleccione el transporte (UDP o TCP) si el dispositivo exige una elección explícita para las sesiones de datos hacia Plaspy.
- Guarde y aplique la configuración en el MicroConvert usando el método de configuración soportado por Laipac.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy después de reiniciarlo y aplicar la configuración.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el MicroConvert:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la instalación

- Una unidad MicroConvert con batería cargada de la versión adecuada (8Ah o 21Ah) instalada y conectada.
- Una tarjeta SIM activa con datos habilitados para reportes GSM GPRS según lo soportado por el MicroConvert.
- Acceso al método o software oficial de configuración de Laipac para el MicroConvert (SMS, herramienta web o herramienta del proveedor según lo provea Laipac).
- Conocimiento sobre si el rastreador requiere seleccionar UDP o TCP para el transporte al servidor.
- Ubicación de instalación segura y, si aplica, fijación magnética a superficies metálicas compatibles con el montaje del dispositivo.
- Acceso básico a la cuenta Plaspy para validar la visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El MicroConvert envía su posición y estado a la plataforma Plaspy abriendo una sesión de datos hacia el endpoint y puerto compartido de Plaspy. Una vez configurado, Plaspy detectará automáticamente el protocolo del dispositivo y aceptará los mensajes entrantes en el puerto común.

- Configure el dispositivo para reportar a d.plaspy.com o use la IP del servidor 54.85.159.138.
- Use el puerto 8888 para todas las conexiones a Plaspy.
- Elija UDP o TCP según lo requiera el firmware del MicroConvert o la herramienta de configuración.
- Plaspy detectará automáticamente el protocolo del rastreador para que los datos se procesen correctamente.
- Tras el reporte exitoso, el rastreador aparecerá en Plaspy para visualización de ubicación y monitoreo de eventos.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración del Laipac MicroConvert proporcionado por el fabricante o vendedor.
2. Verifique que el dispositivo tenga una SIM funcional con datos y que la batería esté suficientemente cargada para pruebas.
3. Ingrese el servidor de Plaspy como d.plaspy.com o, de forma alternativa, use 54.85.159.138 en los ajustes del servidor del dispositivo.
4. Configure el puerto a 8888 en la configuración del dispositivo.
5. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según las opciones del equipo.
6. Aplique o guarde la configuración y realice el reinicio del dispositivo si es necesario.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; revise mensajes o reportes de latido (heartbeat).

## Ejemplos de comandos de configuración

Los comandos de configuración del MicroConvert varían según el firmware de Laipac y el método que utilice el proveedor (por ejemplo, comandos SMS, herramienta de escritorio o interfaz de aprovisionamiento). Debido a que el conjunto exacto de comandos depende del firmware y de la herramienta, consulte la documentación de Laipac o la herramienta de su proveedor para la sintaxis precisa.

Si usa una herramienta de configuración proporcionada por Laipac, siga las indicaciones de la herramienta para establecer:
- Dominio del servidor a d.plaspy.com (o IP del servidor 54.85.159.138)
- Puerto a 8888
- Transporte a UDP o TCP si es requerido

Nota: Esta sección no incluye comandos SMS o CLI específicos porque dependen del fabricante y del firmware. Consulte los materiales de soporte de Laipac para ejemplos concretos.

## Notas de configuración

- El hardware MicroConvert está disponible en dos versiones de batería, 8Ah y 21Ah; planifique las pruebas y la puesta en marcha teniendo en cuenta el consumo de energía y los intervalos de reporte.
- Las versiones de firmware y las variantes regionales del modelo pueden cambiar las opciones de configuración disponibles; siempre verifique qué métodos de configuración admite su unidad.
- Elija UDP o TCP según la capacidad del dispositivo y las recomendaciones de la herramienta de configuración de Laipac; Plaspy admite ambos en el mismo puerto y detecta el protocolo automáticamente.
- Si utiliza configuración por SMS, confirme la sintaxis correcta con la documentación de Laipac, ya que los comandos SMS varían según el firmware.
- Después de aplicar los ajustes, comúnmente se requiere reiniciar el dispositivo para que los cambios entren en vigor; verifique comprobando la presencia del dispositivo en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el Laipac MicroConvert para reportar a Plaspy ofrece a las organizaciones una vía sencilla para monitorear activos sin alimentación continua utilizando un endpoint de servidor consistente. Con la detección automática de protocolos de Plaspy y la configuración de puerto compartido, la integración se limita a apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y validar la conectividad.

Para obtener más información sobre Plaspy y cómo admite integraciones de rastreadores, visite https://www.plaspy.com. Para detalles específicos más recientes sobre configuración de dispositivos, comportamientos de firmware e instrucciones del fabricante, confirme la información actual en el sitio de Laipac https://laipac.com/.
