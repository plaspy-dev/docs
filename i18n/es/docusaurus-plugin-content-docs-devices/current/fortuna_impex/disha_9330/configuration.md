---
slug: /fortuna_impex/disha_9330/configuration
id: disha_9330-configuration
sidebar_label: Configuration
title: Fortuna Impex - Disha 9330 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Fortuna Impex Disha 9330 y conectarlo con Plaspy usando ajustes de servidor compartidos y pasos prácticos
keywords:
  - configuración Fortuna Impex Disha 9330
  - instalación Disha 9330 para Plaspy
  - configuración rastreador GPS Fortuna Impex
  - configuración servidor Disha 9330
  - configuración software seguimiento Disha 9330
  - configuración rastreador GPS Plaspy
  - seguimiento vehicular Disha 9330
  - configuración plataforma Disha 9330
  - integración rastreador Plaspy
  - seguimiento de flotas Disha 9330
---

# Fortuna Impex - Configuración Disha 9330

Esta página describe el contexto público de configuración para usar el Fortuna Impex Disha 9330 con Plaspy. Reúne los ajustes de servidor prácticos y la guía de flujo de trabajo necesarios para apuntar un Disha 9330 compatible al endpoint de Plaspy, de modo que el dispositivo pueda reportar ubicación, eventos y datos históricos en la plataforma. Cuando se requieren métodos del fabricante, esta guía explica qué debe cambiar y por qué, sin sustituir la documentación oficial de Fortuna Impex.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que al Disha 9330 solo hay que configurarlo para enviar datos al endpoint y puerto de Plaspy. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; consulte el manual del equipo cuando un paso difiera del flujo descrito aquí.

## Resumen de la configuración

Configurar un Disha 9330 para usar con Plaspy prepara el equipo para comunicarse con el endpoint central del servidor utilizado por Plaspy. El objetivo es asegurar que el rastreador pueda establecer una sesión de datos, autenticarse si el dispositivo lo requiere y comenzar a enviar reportes periódicos y por eventos para que los vehículos sean visibles en la plataforma Plaspy.

- Establecer el endpoint de reporte del dispositivo hacia el servidor de Plaspy para que la posición y los eventos lleguen a la plataforma correcta.
- Configurar el puerto y el modo de transporte del equipo para que coincidan con los requisitos de Plaspy y los paquetes sean aceptados.
- Validar la conectividad desde el dispositivo hasta el servidor y confirmar que Plaspy recibe datos.
- Guardar y aplicar la configuración en el rastreador y, si es necesario, reiniciar el dispositivo para comenzar el reporte.
- Utilizar las herramientas del fabricante o el método de configuración suministrado para realizar cambios de forma segura y preservar la integridad del firmware.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuraciones basadas en DNS
- IP del servidor 54.85.159.138 como endpoint alternativo
- Puerto 8888 que utiliza Plaspy para todos los dispositivos soportados
- Soporte de transporte por UDP o TCP según la capacidad del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto funciona en todos los dispositivos

## Requisitos típicos antes de comenzar

- Acceso físico a la unidad Disha 9330 y un método seguro para alimentarla durante la configuración
- Confirmación de que el dispositivo esté instalado con buena visibilidad al cielo para recepción GPS según lo recomienda Fortuna Impex
- Una SIM con datos activa y configuración APN si el rastreador reporta por GPRS, tal como lo describe el fabricante
- Acceso al método oficial de configuración de Fortuna Impex, como la herramienta web del proveedor, software de PC o interfaz de configuración
- Conocimiento de las credenciales de seguridad del dispositivo necesarias para la herramienta de configuración
- Un vehículo de prueba o bancada para validar el reporte sin afectar activos en producción

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el Disha 9330 envía su información de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma procese y muestre la información. Plaspy recibe los datos entrantes y, gracias a la detección automática del protocolo, asocia los mensajes con el tipo de dispositivo correcto sin requerir asignaciones de puerto personalizadas.

- Actualizaciones periódicas de ubicación enviadas desde el rastreador a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Mensajes de eventos y alertas reenviados a Plaspy para notificación y registro inmediatos
- Paquetes de latido o estado que permiten a Plaspy determinar si el dispositivo está en línea
- Cargas de datos históricos que hacen que trayectos pasados estén disponibles en la plataforma
- Visibilidad en los paneles y reportes de Plaspy una vez que el dispositivo reporte correctamente

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración Fortuna Impex para el Disha 9330 proporcionado por el fabricante o instalador.
2. En los ajustes de servidor o APN del dispositivo, ingrese el endpoint de Plaspy usando d.plaspy.com o 54.85.159.138.
3. Configure el puerto de reporte en 8888, el usado por Plaspy para todos los dispositivos soportados.
4. Si el dispositivo requiere elegir un transporte, seleccione UDP o TCP según la preferencia del instalador o la capacidad del equipo.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o en la interfaz del dispositivo.
6. Reinicie el Disha 9330 si la herramienta o el manual recomiendan un reinicio para activar los nuevos ajustes.
7. Valide que el dispositivo informe a Plaspy comprobando el estado en línea y los mensajes recientes en la plataforma después de la configuración.

## Comandos de configuración de ejemplo

La documentación pública suministrada para el Disha 9330 no incluía cadenas de comando específicas ni comandos SMS. Los comandos exactos de configuración y el método para enviarlos varían según la herramienta del instalador, el firmware y el software del proveedor. Use la utilidad de configuración de Fortuna Impex o el manual suministrado por el fabricante para realizar estos pasos. Si dispone de comandos oficiales de Fortuna Impex, aplíquelos en el orden que el proveedor indique y conserve los marcadores de posición como los valores APN.

## Notas de configuración

- Las versiones de firmware pueden cambiar las opciones de configuración y los formatos de mensaje; verifique siempre la versión de firmware del equipo antes de aplicar cambios.
- Algunas instalaciones prefieren UDP por menor overhead, mientras que otras usan TCP por la entrega garantizada; elija el transporte que mejor se adapte a su red y al comportamiento del equipo.
- La plataforma Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que no es necesaria la variación de puerto por dispositivo en el servidor.
- Las prácticas de instalación, como la ubicación de montaje y el cableado de alimentación, afectan la estabilidad del GPS y del dispositivo; siga las recomendaciones de instalación de Fortuna Impex para obtener mejores resultados.
- Si recibe comandos por SMS o software proporcionados por el fabricante, confirme los marcadores de posición como APN, usuario y contraseña con su proveedor celular antes de enviarlos.

## Por qué usar Plaspy con esta configuración

Usar el Disha 9330 con Plaspy ofrece una forma práctica de centralizar la ubicación de los vehículos, las alertas por eventos y los reportes históricos para operaciones de flota y servicios. Los ajustes de servidor compartidos de Plaspy simplifican la incorporación de muchos dispositivos, ya que usted apunta rastreadores compatibles al mismo endpoint y puerto mientras Plaspy se encarga de la detección del protocolo y el procesamiento de mensajes.

Para saber más sobre Plaspy y las configuraciones soportadas visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y las indicaciones del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles más recientes en el sitio oficial de Fortuna Impex http://fortunaindia.com/ antes de realizar un despliegue a gran escala.
