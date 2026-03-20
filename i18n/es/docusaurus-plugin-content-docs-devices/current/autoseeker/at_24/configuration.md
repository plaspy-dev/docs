---
slug: /autoseeker/at_24/configuration
id: at_24-configuration
sidebar_label: Configuration
title: Autoseeker - AT-24 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Autoseeker AT-24 a Plaspy con los ajustes de servidor compartido y pasos prácticos
keywords:
  - configuración Autoseeker AT-24
  - instalación Autoseeker AT-24
  - configuración servidor AT-24 Plaspy
  - configuración GPS AT-24
  - configuración rastreador Plaspy
  - configuración GPS Autoseeker
  - instalación rastreador vehicular AT-24
  - configuración inmovilizador AT-24
  - configuración geocerca AT-24
  - seguimiento de flotas AT-24
---

# Autoseeker - AT-24 Configuración

Esta página reúne la información pública y los ajustes compartidos necesarios para integrar el rastreador Autoseeker AT-24 con Plaspy. Aquí encontrará la configuración del servidor de Plaspy y las recomendaciones prácticas que se utilizan al preparar un AT-24 para que entregue posición y eventos a la plataforma. Esta guía está pensada para instaladores técnicos y responsables de flota que preparan dispositivos para su integración.

Plaspy acepta conexiones de dispositivos compatibles a través de un endpoint y puerto comunes, y detecta automáticamente el protocolo del rastreador. Los pasos que debe seguir en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Revise esta guía junto con la documentación oficial del AT-24 para conocer comandos y notas de firmware específicos del dispositivo.

## Resumen de la configuración

El objetivo es dejar el AT-24 listo para comunicarse de forma fiable con Plaspy, de modo que la plataforma reciba en tiempo real la ubicación, la ignición y los eventos de alarma. Debe apuntar el equipo al endpoint de Plaspy y asegurarse de que tenga conexión de datos móviles activa y los ajustes de transporte correctos.

- Configure el rastreador para enviar telemetría a Plaspy utilizando el endpoint y puerto indicados.
- Asegúrese de que el equipo tenga una SIM con servicio de datos activo y que la APN esté correctamente configurada.
- Valide que el AT-24 reporte posiciones y mensajes de evento tras la configuración para que el dispositivo aparezca en Plaspy.
- Guarde y aplique los ajustes en el AT-24 y reinícielo si el procedimiento del fabricante lo requiere.
- Use las herramientas del fabricante o los comandos SMS donde estén soportados para introducir los valores de servidor y transporte.

## Ajustes del servidor Plaspy

- Utilice el dominio d.plaspy.com como endpoint de la plataforma.
- Si se requiere dirección IP, puede emplearse 54.85.159.138.
- Plaspy escucha en el puerto 8888 para los reportes de dispositivos.
- El transporte admite UDP o TCP; seleccione el que requiera su dispositivo si solicita escoger.
- Plaspy realiza detección automática de protocolo para aceptar e interpretar el formato del rastreador.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que puede reutilizarse el puerto 8888 para el AT-24 y otros rastreadores compatibles.

## Requisitos típicos antes de la instalación

- Un equipo AT-24 alimentado y conectado según la guía de instalación del fabricante, o alimentado temporalmente en banco de pruebas.
- Una tarjeta SIM activa con plan de datos y la APN correcta para el operador móvil.
- Acceso al método oficial de configuración del AT-24, ya sea la herramienta del fabricante, comandos SMS o software de aprovisionamiento del proveedor.
- Capacidad confirmada para ingresar un dominio o IP de servidor y un valor de puerto numérico en la configuración del dispositivo.
- Revisión simple de la colocación de antenas y carga de la batería de respaldo para asegurar la recepción GNSS y celular.
- Acceso a la cuenta de Plaspy para verificar que el dispositivo aparezca y reporte en la plataforma después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT-24 enviará por datos móviles las telemetrías de posición y eventos al endpoint y puerto de Plaspy. Plaspy procesa esos mensajes y los convierte en ubicación en tiempo real, alertas de eventos y registros históricos dentro de la plataforma.

- El rastreador debe reportar al endpoint compartido d.plaspy.com (o a 54.85.159.138) en el puerto 8888.
- El transporte de datos puede ser UDP o TCP según la configuración y firmware del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Eventos estándar como encendido/apagado de ACC, activaciones de geocerca, exceso de velocidad y alertas de batería baja se envían a Plaspy para notificación y auditoría.
- Funciones de inmovilizador remoto y otros controles se reflejan como estados y comandos donde el AT-24 y el flujo de trabajo del operador lo permitan.
- La conexión y el reporte exitosos hacen que el dispositivo sea visible en los paneles de Plaspy y habilitan la monitorización en tiempo real y los informes históricos.

## Flujo de configuración común

1. Acceda al método de configuración oficial del Autoseeker AT-24 o al software proporcionado por el fabricante o el proveedor.
2. Verifique que el dispositivo tenga una SIM funcional y los ajustes APN correctos cuando lo requiera el operador móvil.
3. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de servidor del equipo.
4. Configure el puerto del dispositivo en 8888 como puerto de destino para los reportes.
5. Seleccione UDP o TCP si el AT-24 pide elegir protocolo de transporte.
6. Aplique o guarde la configuración en el dispositivo y realice un reinicio si lo indica el fabricante.
7. Valide que el AT-24 esté reportando a Plaspy confirmando que el dispositivo aparece y envía telemetría en la plataforma.

## Ejemplos de comandos de configuración

La sintaxis exacta de los comandos y el método para configurar servidor y transporte dependen de las herramientas del fabricante y del proveedor. Los comandos SMS precisos, las cadenas de configuración o los pasos en la herramienta de escritorio pueden variar según la versión de firmware y el software de aprovisionamiento. En la práctica deberá usar la interfaz de configuración del equipo para establecer:

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138 (si se requiere una IP)
- Puerto: 8888
- Transporte: UDP o TCP

Consulte siempre el manual del AT-24 o la guía de aprovisionamiento de su proveedor para obtener la sintaxis exacta de los comandos o el formato SMS necesario para su versión de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; confirme los comandos en la documentación del fabricante.
- Elija UDP o TCP según la recomendación del firmware del dispositivo; Plaspy acepta ambos y detecta automáticamente el protocolo del rastreador al recibir mensajes.
- Verifique APN, datos de la SIM y calidad de señal antes de depender de la plataforma para monitorización en vivo.
- Al usar la configuración por SMS, mantenga los marcadores de posición requeridos por los comandos y confirme las respuestas de éxito del dispositivo.
- Mantenga la batería de respaldo cargada y confirme que el cableado de ignición e inmovilizador siga las prácticas de instalación recomendadas.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-24 con Plaspy ofrece a flotas y operadores de activos una solución práctica para obtener visibilidad continua de ubicación, alertas basadas en eventos y controles remotos operativos. La forma compacta del AT-24, su amplio rango de voltaje de entrada y la batería de respaldo ayudan a garantizar reportes confiables desde instalaciones ocultas, mientras que Plaspy proporciona la plataforma para recopilar, alertar y reportar esa telemetría con fines operativos y de respuesta ante robos.

Conozca más sobre Plaspy en el sitio principal https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique las instrucciones más recientes de configuración y la sintaxis de comandos del AT-24 en el sitio oficial del fabricante https://autoseekergps.com/ para asegurar la información más actualizada y precisa.
