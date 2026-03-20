---
slug: /navtelekom/smart_s_2433_hit/configuration
id: smart_s_2433_hit-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2433 HIT Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Navtelekom SMART S-2433 HIT a Plaspy con ajustes de servidor y flujo de instalación
keywords:
  - Configuración Navtelekom SMART S-2433 HIT
  - Configuración SMART S-2433 HIT
  - Rastreador Navtelekom Plaspy
  - Configuración de servidor SMART S-2433 HIT
  - Configuración rastreador GPS Navtelekom
  - Integración SMART S-2433 HIT Plaspy
  - Configuración rastreador vehicular
  - Seguimiento de flotas SMART S-2433
  - Guía de configuración Navtelekom
  - Configuración rastreador GPS 2G
---

# Navtelekom - Configuración del SMART S-2433 HIT

Esta página describe el contexto público de configuración para usar el Navtelekom SMART S-2433 HIT con Plaspy. Está enfocada en los ajustes prácticos y el flujo de trabajo necesarios para apuntar el dispositivo a Plaspy y lograr que la posición GNSS, los estados de E/S y la telemetría estén disponibles en su cuenta Plaspy. La orientación se basa en las capacidades del SMART S-2433 HIT, incluyendo su módem 2G, antenas GNSS y GSM internas, batería de respaldo y entradas/salidas.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador al conectarse. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice esta página como referencia práctica de integración y confirme los detalles específicos con la documentación y herramientas de Navtelekom.

## Resumen de la configuración

Este proceso prepara el SMART S-2433 HIT para enviar de forma fiable su telemetría y eventos a Plaspy, de modo que la unidad aparezca en la plataforma para seguimiento en tiempo real, alertas e informes históricos.

- Configure el endpoint de red y el transporte del dispositivo para que informe a Plaspy
- Verifique que el dispositivo pueda registrarse en la red celular con una SIM y APN válidos
- Valide la conectividad en vivo y que la posición, E/S y mensajes de evento lleguen a Plaspy
- Guarde y aplique los ajustes, luego reinicie el rastreador si es necesario para activar la nueva configuración de servidor
- Confirme la visibilidad del rastreador en Plaspy y revise el reporte de eventos como encendido, alarma y telemetría

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta

## Requisitos típicos antes de la configuración

- Acceso al método o herramienta oficial de configuración de Navtelekom, como NTC Configurator o la interfaz local del dispositivo
- Una tarjeta SIM operativa con plan de datos 2G activo y el APN correcto para su operador
- Dispositivo alimentado y montado o accesible para la configuración inicial y pruebas, incluyendo batería de respaldo cargada si está disponible
- Firmware del dispositivo actualizado cuando sea posible y acceso a la documentación de Navtelekom para campos específicos del modelo y notas de firmware
- Una cuenta Plaspy para verificar que los dispositivos aparezcan y reporten una vez configurados

## Cómo se conecta este rastreador a Plaspy

El SMART S-2433 HIT envía sus mensajes GNSS, E/S y telemetría a través del enlace 2G del dispositivo al endpoint y puerto compartido de Plaspy. Plaspy ingiere los datos, determina automáticamente el protocolo del rastreador y muestra la posición, alertas y telemetría en la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o a la IP del servidor 54.85.159.138
- Las comunicaciones usan el puerto 8888, el mismo puerto que Plaspy utiliza para todos los dispositivos soportados
- Puede seleccionar transporte UDP o TCP en el dispositivo si la configuración lo requiere
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los mensajes entrantes para su visualización y gestión de eventos
- Una vez reportando, el rastreador suministra ubicación, cambios de estado de E/S y telemetría que Plaspy usa para mapas, alertas e historial

## Flujo de configuración común

1. Acceda al método o software oficial de configuración de Navtelekom (por ejemplo NTC Configurator o la interfaz local por Bluetooth/serial).
2. En los ajustes de servidor o reporte remoto ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto de destino en 8888.
4. Elija el tipo de transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Configure el APN y los parámetros del operador para la SIM del dispositivo si aún no están establecidos, luego guarde o aplique la configuración.
6. Reinicie el dispositivo si las instrucciones del fabricante lo exigen para aplicar los ajustes de red y servidor.
7. Valide que el dispositivo reporte a Plaspy verificando mensajes entrantes y que la unidad aparezca en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Las herramientas del fabricante Navtelekom y el firmware definen los comandos exactos y las pantallas de configuración usados para fijar parámetros de servidor y red. Los métodos varían entre NTC Configurator, la configuración local por Bluetooth o la configuración por serial/USB. Como los comandos difieren según firmware y herramienta, consulte la herramienta de configuración de Navtelekom o el manual de usuario para el formato y pasos precisos.

Si usa el software de configuración de Navtelekom, normalmente ingresará los campos de host y puerto del servidor directamente en la interfaz gráfica, o aplicará parámetros equivalentes mediante la interfaz local del dispositivo. Mantenga el servidor como d.plaspy.com o 54.85.159.138 y el puerto en 8888 y seleccione UDP o TCP como transporte.

## Notas de configuración

- El texto del firmware y la interfaz de configuración puede variar entre versiones de Navtelekom; confirme siempre los nombres de campo en la herramienta actual del fabricante.
- Elija TCP o UDP según su red y el comportamiento del dispositivo; Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.
- Asegúrese de que el APN y los parámetros del operador en la SIM sean correctos para la conectividad 2G en su región; la falta de registro celular impedirá el reporte a Plaspy.
- Use NTC Configurator de Navtelekom o acceso local por Bluetooth/serial para una configuración confiable y para actualizar firmware cuando sea necesario.
- Tras aplicar cambios de servidor, puede ser necesario reiniciar o cortar y volver a aplicar alimentación al dispositivo para iniciar una conexión nueva con el endpoint de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2433 HIT con Plaspy ofrece a las organizaciones un seguimiento GNSS 2G confiable combinado con un sólido reporte de E/S y telemetría. La batería de respaldo del dispositivo, su protección eléctrica y las entradas flexibles lo hacen una opción práctica para aplicaciones vehiculares e industriales donde la visibilidad continua y la monitorización basada en eventos son importantes.

Para saber más sobre cómo Plaspy soporta la gestión de flotas y el seguimiento en tiempo real visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y las últimas instrucciones del fabricante, verifique la información en el sitio de Navtelekom https://www.navtelecom.ru/.
