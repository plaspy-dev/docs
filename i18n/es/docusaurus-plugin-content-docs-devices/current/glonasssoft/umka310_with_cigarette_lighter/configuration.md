---
slug: /glonasssoft/umka310_with_cigarette_lighter/configuration
id: umka310_with_cigarette_lighter-configuration
sidebar_label: Configuration
title: GLONASSsoft - UMKa310 with cigarette lighter Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el UMKa310 de GLONASSsoft con toma de mechero para usar con Plaspy incluyendo ajustes de servidor y flujo de trabajo
keywords:
  - Configuración UMKa310 GLONASSsoft
  - Configuración UMKa310 Plaspy
  - Configuración de servidor UMKa310
  - Rastreador GPS UMKa310 Plaspy
  - Configuración de rastreador GLONASSsoft
  - Configuración UMKa310 con toma de mechero
  - Integración EGTS Wialon Plaspy
  - Seguimiento de vehículo UMKa310
  - Gestión de flota UMKa310
  - Configuración de telemetría UMKa310
---

# GLONASSsoft - Configuración del UMKa310 con toma de mechero

Esta página documenta el contexto público de configuración para usar el GLONASSsoft UMKa310 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica los pasos prácticos para preparar el dispositivo y describe el flujo de trabajo habitual al aplicar la configuración del fabricante. El contenido está pensado como referencia técnica para integradores, instaladores y gestores de flota que empleen el UMKa310 como un rastreador GPS compatible con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como punto de partida práctico y confirme los controles específicos del equipo en la documentación de GLONASSsoft o con las herramientas del proveedor que utilice para configuración por Bluetooth, SMS o GPRS.

## Resumen de la configuración

El proceso de configuración prepara un UMKa310 para enviar datos GNSS y telemetría a Plaspy de forma fiable y con comportamiento de transporte predecible. El objetivo es apuntar el rastreador al endpoint de Plaspy, elegir el transporte apropiado y verificar que el dispositivo aparezca en el backend de Plaspy.

- Configure el dispositivo para que reporte a Plaspy usando el dominio o la IP compartida y el puerto de la plataforma.
- Seleccione UDP o TCP como transporte si el firmware del dispositivo lo solicita.
- Asegure una alimentación y conectividad estables durante el registro y las pruebas iniciales.
- Valide que las posiciones y la telemetría reportadas aparezcan en Plaspy después de la configuración.
- Si lo desea, configure el UMKa310 para enviar a múltiples servidores para redundancia, incluyendo a Plaspy como endpoint primario o secundario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que el puerto 8888 es el único que debe configurar en el rastreador

## Requisitos típicos antes de la instalación

- Confirme que el UMKa310 recibe alimentación correctamente a través de la toma de mechero y que el dispositivo se enciende.
- Asegúrese de contar con una SIM válida y cobertura celular si va a usar reportes por GPRS, o acceso por Bluetooth para configuración local.
- Acceso al método oficial de configuración de GLONASSsoft, como la herramienta Bluetooth provista, el conjunto de comandos SMS o el software del proveedor.
- Credenciales y una cuenta activa de Plaspy listas para recibir e identificar el dispositivo cuando este reporte.
- Familiaridad básica con el flujo de configuración del equipo y con las herramientas o formatos de comandos SMS suministrados por el proveedor.
- Opcionalmente, un vehículo de prueba o un entorno seguro para validar el reporte en vivo sin interferir con operaciones en producción.

## Cómo se conecta este rastreador a Plaspy

El UMKa310 envía coordenadas GNSS y telemetría utilizando protocolos abiertos soportados hacia un endpoint backend configurado. Cuando el dispositivo apunta a Plaspy, transmite paquetes de posición y telemetría al endpoint y puerto compartidos donde el backend de Plaspy detecta automáticamente el protocolo.

- Configure el UMKa310 para reportar a d.plaspy.com o a la IP 54.85.159.138 y establezca el puerto de destino a 8888.
- Elija UDP o TCP como transporte en el dispositivo si el firmware requiere una selección explícita.
- El dispositivo puede enviar datos en formatos EGTS o Wialon Combine, que Plaspy acepta mediante detección automática.
- El UMKa310 admite transmisión simultánea a múltiples servidores, por lo que Plaspy puede ser uno de varios destinatarios para redundancia.
- Tras la configuración, el dispositivo transmite ubicación y telemetría a Plaspy, donde se vuelve visible en la plataforma para monitoreo y gestión de eventos.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración de GLONASSsoft para el UMKa310, usando la herramienta Bluetooth del proveedor, comandos SMS o la utilidad de escritorio.
2. En los ajustes de servidor introduzca d.plaspy.com o 54.85.159.138 como destino de reporte.
3. Establezca el puerto de destino a 8888, que es el puerto de Plaspy y el mismo que se usa para todos los dispositivos soportados.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere esa selección durante la configuración.
5. Aplique o guarde la configuración en el UMKa310 usando la herramienta o el conjunto de comandos del proveedor.
6. Reinicie el dispositivo si el firmware exige un reinicio para aplicar cambios de red o servidor.
7. Valide que el UMKa310 reporte a Plaspy comprobando la actividad del dispositivo en Plaspy una vez que haya establecido la conexión.

## Ejemplos de comandos de configuración

El UMKa310 admite configuración mediante herramientas del proveedor como Bluetooth, comandos SMS o utilidades de configuración GPRS. Los formatos públicos exactos de SMS o comandos pueden variar según el firmware y el conjunto de herramientas del proveedor. No se incluyen comandos universales en esta página porque el fabricante suministra la sintaxis específica y las herramientas.

Al usar la herramienta de configuración del UMKa310, los comandos o campos prácticos que deberá establecer son el dominio o IP del servidor y el puerto. Por ejemplo, en una herramienta Bluetooth o web del proveedor establecerá:
- Host del servidor a d.plaspy.com o 54.85.159.138
- Puerto del servidor a 8888
- Transporte a UDP o TCP si es requerido

Consulte las utilidades de configuración de GLONASSsoft o el manual del producto para los comandos SMS exactos o la ubicación de los menús. Si recibe una lista de comandos del fabricante, respete el orden de los comandos proporcionados e incluya pasos opcionales de reinicio solo si el fabricante los documenta.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de menú, sintaxis de comandos SMS o campos de la app Bluetooth. Confirme la versión de firmware antes de aplicar las instrucciones.
- El UMKa310 admite múltiples servidores de reporte; configure Plaspy como uno de los destinos, entendiendo cómo su firmware maneja prioridades entre servidor primario y secundario.
- Elija UDP para reportes de menor sobrecarga si su red y backend esperan datagramas; elija TCP si prefiere semánticas de entrega garantizada y su conjunto de herramientas lo soporta.
- La configuración remota puede estar disponible por SMS o GPRS dependiendo de su instalación. La configuración local por Bluetooth es útil para la puesta en marcha inicial cuando el dispositivo es accesible.
- Verifique siempre que los ajustes de registro del dispositivo y la transferencia por lotes sean compatibles con las expectativas de Plaspy en cuanto a frecuencia de reporte y volumen de datos.

## Por qué usar Plaspy con esta configuración

Usar el UMKa310 con Plaspy ofrece una vía sencilla para integrar ubicación GNSS, telemetría y datos opcionales de sensores en un backend en la nube que detecta automáticamente los protocolos comunes de rastreadores. El soporte del UMKa310 para EGTS y Wialon Combine, junto con su capacidad para reportar a múltiples servidores, facilita añadir Plaspy a una flota para redundancia, monitoreo y procesos anti robo.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo más actualizados, comportamiento de firmware y detalles del fabricante, revise la documentación oficial de GLONASSsoft en https://glonasssoft.ru/ antes del despliegue final.
