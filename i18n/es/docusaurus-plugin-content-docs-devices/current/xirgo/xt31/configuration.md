---
slug: /xirgo/xt31/configuration
id: xt31-configuration
sidebar_label: Configuration
title: Xirgo - XT31 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Xirgo XT31 y conectarlo a Plaspy usando servidor compartido y comandos SMS o herramientas del proveedor
keywords:
  - Configuración Xirgo XT31
  - Instalación Xirgo XT31
  - Configuración XT31 Plaspy
  - Configuración de servidor XT31
  - Configuración plataforma GPS XT31
  - Configuración de pasarela de carga Xirgo
  - Configuración software de rastreo XT31
  - Integración rastreador Plaspy
  - Configuración telemática de semirremolque
  - Configuración de monitoreo de contenedores
---

# Xirgo - Configuración del XT31

Esta página describe el contexto público de configuración para usar el Xirgo XT31 con Plaspy. Resume los pasos prácticos y los ajustes de servidor que se emplean habitualmente para dirigir la telemetría y los datos de carga del XT31 hacia la plataforma Plaspy, e incluye los comandos SMS públicos que algunas instalaciones utilizan para provisionar parámetros de red y servidor.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos específicos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como referencia práctica y confirme los procedimientos específicos del dispositivo con la documentación de Xirgo o con su instalador antes del despliegue.

## Resumen de configuración

El objetivo de la configuración es preparar el XT31 para que envíe de forma fiable su telemetría y los datos de sensores de carga a Plaspy, y verificar que el dispositivo aparezca en la plataforma para monitoreo e informes. Cuando esté disponible, el XT31 puede configurarse mediante comandos SMS o con la herramienta de configuración del proveedor. Los comandos públicos que se muestran abajo son ejemplos para establecer el APN y la información del servidor GPRS de Plaspy.

- Configurar el APN de la red para que el dispositivo use datos móviles para la telemetría.
- Señalar el XT31 al endpoint y puerto del servidor Plaspy para el envío de datos.
- Seleccionar el tipo de transporte si es necesario y confirmar que el dispositivo usará el puerto 8888.
- Validar la conectividad y que el dispositivo sea visible en Plaspy tras la configuración.
- Aplicar los ajustes con comandos SMS o la herramienta del fabricante según la instalación.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el XT31. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Detección automática del protocolo en Plaspy

## Requisitos típicos antes de la configuración

- Una unidad XT31 encendida y accesible que pueda aceptar configuración por SMS o mediante software del proveedor.
- Una SIM con datos móviles válida y los detalles de APN correctos del operador celular.
- Acceso al método de configuración del proveedor usado para su versión de dispositivo, por ejemplo aprovisionamiento por SMS o la herramienta de configuración de Xirgo.
- Conocimiento de las credenciales de APN y cualquier usuario o contraseña requeridos por el operador móvil.
- Acceso básico a su cuenta de Plaspy para confirmar la visibilidad del dispositivo después de la configuración.
- Plan para reiniciar el dispositivo tras aplicar ajustes de red y servidor si el firmware lo requiere.

## Cómo se conecta este rastreador a Plaspy

El XT31 se configura para reportar telemetría y el estado de carga al endpoint y puerto compartidos de Plaspy. Plaspy ingiere actualizaciones por eventos y registros históricos para poner los datos a disposición en paneles y alertas, y detectará automáticamente el protocolo del dispositivo cuando lleguen los primeros mensajes.

- El dispositivo envía datos GPRS al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según los requisitos del equipo y las condiciones de la red.
- Plaspy recibe alertas por eventos y telemetría periódica para visibilidad y flujos operativos.
- Los registros históricos y los logs de sensores se reenvían a Plaspy para informes y análisis post viaje.
- El puerto compartido 8888 se usa para todos los dispositivos conectados a Plaspy, lo que simplifica despliegues con múltiples unidades.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Xirgo para su unidad XT31, como el aprovisionamiento por SMS o la herramienta de configuración proporcionada por el proveedor.
2. Ingrese el destino del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo permita su dispositivo.
3. Establezca el puerto de reporte en 8888, que Plaspy utiliza para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo exige una selección explícita del transporte.
5. Configure el APN y las credenciales móviles para que el XT31 pueda establecer conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en su cuenta con la telemetría y eventos esperados.

## Ejemplos de comandos de configuración

El XT31 puede configurarse por SMS en instalaciones que permiten el aprovisionamiento por SMS. Los siguientes comandos SMS públicos se proporcionan en la guía del fabricante para establecer el APN del operador y el servidor GPRS. Mantenga los marcadores de posición y cámbielos por los valores de su operador donde corresponda.

- Establecer el APN del operador (reemplace los marcadores de posición por los valores de su operador)
```text
+XT:1002,[apnu],[apnp],[apn]
```
Explicación de los marcadores de posición
- [apn] el nombre del APN proporcionado por el operador móvil
- [apnu] usuario del APN si es requerido, de lo contrario dejar en blanco o cero según las instrucciones del operador
- [apnp] contraseña del APN si es requerida, de lo contrario dejar en blanco o cero según las instrucciones del operador

- Establecer el servidor GPRS para Plaspy (este comando usa la IP del servidor Plaspy y el puerto 8888)
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notas
- El segundo comando configura el puerto 8888 y la IP del servidor Plaspy 54.85.159.138 con parámetros adicionales incluidos por el formato del comando del fabricante.
- Si su firmware acepta un nombre de host en lugar de una IP, puede introducir d.plaspy.com y el puerto 8888 usando el método del fabricante que soporte dominios.
- Envíe los comandos en el orden mostrado cuando la documentación del fabricante identifique una dependencia en el orden.

## Notas de configuración

- Las variantes de firmware y regionales del XT31 pueden aceptar formatos SMS o opciones de la herramienta del proveedor diferentes; siempre verifique las notas de firmware del dispositivo antes de enviar comandos.
- El dispositivo admite configuración por SMS en muchas instalaciones, pero algunas implementaciones usan software de aprovisionamiento del proveedor o una herramienta de instalador en su lugar.
- Elija UDP o TCP según la fiabilidad de su red y las indicaciones del firmware del dispositivo; Plaspy detectará automáticamente el protocolo del rastreador al recibir datos.
- Tenga a mano las credenciales de APN y la información de aprovisionamiento de la SIM; configuraciones incorrectas de APN son una causa común por la que los dispositivos no reportan.
- Tras aplicar los ajustes, espere un breve lapso para que el dispositivo se registre en la red y Plaspy ingiera los primeros mensajes.

## Por qué usar Plaspy con esta configuración

Usar el XT31 con Plaspy consolida la telemetría de carga, eventos de sensores y evaluaciones de capacidad junto con la ubicación de la flota y los datos operativos en una sola plataforma. Esta configuración permite a los operadores monitorear el estado en tiempo real, recibir alertas por eventos y utilizar registros históricos para optimizar rutas y decisiones de utilización.

Para obtener más información sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Para los pasos de configuración específicos más recientes, notas de firmware y la guía del fabricante, verifique los detalles en el sitio web de Xirgo https://xirgo.com/ ya que las especificaciones del proveedor y los métodos de configuración pueden cambiar con el tiempo.
