---
slug: /aquila/ux101/configuration
id: ux101-configuration
sidebar_label: Configuration
title: Aquila - UX101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Aquila UX101 con ajustes de servidor Plaspy y pasos prácticos para visibilidad en la plataforma
keywords:
  - Configuración Aquila UX101
  - Instalación Aquila UX101
  - Configuración de servidor Aquila UX101
  - Rastreado r GPS Aquila Plaspy
  - Configuración UX101 Plaspy
  - Configuración rastreador vehicular Aquila
  - Configuración plataforma GPS UX101
  - Guía de configuración de rastreadores
  - Configuración de rastreador para gestión de flotas
  - Configuración de rastreador Plaspy
---

# Aquila - Configuración del UX101

Esta página describe el contexto público de configuración requerido para conectar el rastreador Aquila UX101 a Plaspy. Explica los ajustes compartidos del servidor Plaspy y los pasos prácticos que usted o un instalador usarán para preparar el dispositivo y que reporte correctamente a la plataforma. La guía utiliza únicamente parámetros de configuración públicos y está pensada para ayudar a integrar el UX101 en Plaspy, facilitando el seguimiento de flotas y la visibilidad operativa.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el primer contacto. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que esto debe tratarse como una guía práctica pública y no como un sustituto del manual oficial del dispositivo.

## Resumen de la configuración

El proceso de configuración prepara el UX101 para enviar su telemetría al servidor de Plaspy y así el dispositivo aparezca y se actualice de forma fiable dentro de la plataforma. Los siguientes puntos resumen el propósito práctico de la configuración y qué verificar durante la instalación.

- Apuntar el UX101 al endpoint del servidor de Plaspy para establecer la conexión de datos para ubicación y eventos.
- Configurar el transporte y puerto para que el dispositivo entregue paquetes a Plaspy de manera fiable.
- Validar la conectividad celular y la antena para recepción consistente de GPS y GSM.
- Aplicar y guardar los cambios, luego confirmar que el dispositivo es visible y está enviando datos a Plaspy.
- Verificar el comportamiento de reporte para eventos comunes como movimiento, encendido/apagado y actualizaciones periódicas de ubicación.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son los ajustes públicos de Plaspy a usar al configurar el UX101. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y se basa en la detección automática de protocolo para identificar el formato del dispositivo.

## Requisitos típicos antes de la instalación

- Confirme que el UX101 tiene alimentación y está montado o conectado para la configuración inicial y pruebas.
- Asegúrese de que haya instalada una SIM celular activa con datos y que permita conexiones salientes si el dispositivo usa transporte celular.
- Acceso al método o software oficial de configuración de Aquila proporcionado por el fabricante o el proveedor.
- Un sitio de prueba con vista despejada para validar bloqueo GPS y fuerza de señal GSM, especialmente en instalaciones ocultas o tipo stealth.
- Credenciales o permisos necesarios para cambiar la configuración de red del dispositivo y guardar los ajustes.
- Alguna forma de monitorear conexiones entrantes en Plaspy o solicitar apoyo a su administrador Plaspy para confirmar la visibilidad del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el UX101 enviará datos de ubicación y del dispositivo al endpoint y puerto compartidos de Plaspy para que el dispositivo sea visible en la plataforma. Plaspy aceptará la conexión en el puerto compartido y determinará automáticamente el protocolo usado por el rastreador.

- El rastreador inicia la conexión a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y la preferencia del instalador.
- Una vez conectado, Plaspy detecta automáticamente el protocolo del dispositivo y comienza a decodificar la telemetría.
- El UX101 reporta actualizaciones de posición periódicas y mensajes de eventos para permitir el rastreo y monitoreo en Plaspy.
- Confirmar que el dispositivo se registra en Plaspy completa la verificación básica de conectividad.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración del Aquila UX101 proporcionado por el fabricante o su proveedor.
2. En los ajustes de red o servidor del dispositivo, ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Configure el puerto del servidor en 8888.
4. Elija UDP o TCP si el UX101 solicita seleccionar el protocolo de transporte.
5. Guarde o aplique los cambios de configuración en la herramienta del fabricante.
6. Reinicie el dispositivo si la herramienta de configuración o el firmware exige reboot para aplicar los cambios.
7. Valide que el dispositivo está reportando a Plaspy revisando el estado en la plataforma o solicitando confirmación al administrador Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos o las cadenas SMS para el UX101 dependen del firmware del fabricante y de las herramientas de configuración que utilice. Los dispositivos Aquila suelen ofrecer configuración mediante software del proveedor, conexión serial o comandos SMS proporcionados por el vendedor. Dado que los conjuntos de comandos son específicos del fabricante, siga las instrucciones oficiales de Aquila para enviar la dirección del servidor y los parámetros de puerto.

Si dispone de una lista de comandos del fabricante de Aquila o de su proveedor, aplique los mismos valores públicos que aparecen en esta página:
- Servidor d.plaspy.com o 54.85.159.138
- Puerto 8888
- Transporte UDP o TCP

Para comandos SMS o de consola que incluyan marcadores, conserve marcadores como [apn], [apnu] o [apnp] y sustitúyalos por los valores de su operador de SIM al realizar la configuración.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los nombres exactos de los menús y la sintaxis de los comandos para establecer la dirección del servidor y el transporte.
- Si tiene la opción, tanto UDP como TCP funcionan con Plaspy. Elija según sus necesidades de confiabilidad y el comportamiento del firmware del dispositivo en su entorno.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y confía en la detección automática de protocolo, por lo que use los valores públicos de servidor indicados arriba.
- En instalaciones ocultas, verifique la colocación de la antena y la señal GSM antes de la instalación final para evitar conectividad intermitente.
- Mantenga una copia de los pasos de configuración del fabricante y verifique la sintaxis de cualquier comando contra la documentación oficial de Aquila.

## Por qué usar Plaspy con esta configuración

Configurar el Aquila UX101 para reportar a Plaspy ofrece a las organizaciones una vía sencilla para centralizar la ubicación de vehículos, el estado y los eventos en una única plataforma de gestión de flotas. El uso del endpoint y puerto compartidos de Plaspy simplifica el despliegue porque la plataforma identifica automáticamente el protocolo del dispositivo y comienza a decodificar la telemetría sin diferencias por servidor por dispositivo.

Para más información sobre Plaspy y cómo gestiona las conexiones de dispositivos y la visibilidad de la flota, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y orientación de instalación del Aquila UX101, verifique los detalles con el fabricante en https://www.itriangle.in/.
