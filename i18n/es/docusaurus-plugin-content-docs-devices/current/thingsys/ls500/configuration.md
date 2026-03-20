---
slug: /thingsys/ls500/configuration
id: ls500-configuration
sidebar_label: Configuration
title: ThingSys - LS500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThingSys LS500 con ajustes de servidor Plaspy y comandos SMS para la puesta en marcha
keywords:
  - configuración ThingSys LS500
  - configuración LS500
  - configuración LS500 Plaspy
  - configuración servidor LS500
  - configuración rastreador ThingSys
  - comandos SMS LS500
  - configuración rastreador Plaspy
  - rastreo vehicular LS500
  - rastreo de flotas ThingSys LS500
  - configuración GPRS LS500
---

# ThingSys - LS500 Configuración

Esta página describe el contexto público de configuración para usar el ThingSys LS500 con la plataforma Plaspy. Reúne los ajustes prácticos y los comandos por SMS disponibles públicamente para preparar el LS500 y que reporte a Plaspy. Cuando las herramientas del fabricante o el firmware ofrezcan métodos distintos, eso se indica; el objetivo es facilitar los ajustes de servidor específicos para Plaspy y un flujo de trabajo por SMS claro y sencillo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La descripción del LS500 y los comandos SMS mostrados sirven como base para los ejemplos de esta página; verifique variaciones específicas del dispositivo en la documentación oficial de ThingSys cuando sea necesario.

## Resumen de la configuración

Este proceso prepara al LS500 para comunicar datos de ubicación y operación con Plaspy configurando el endpoint de red, el transporte, el APN, los intervalos y la sincronización horaria. En muchas implementaciones el LS500 se configura mediante comandos SMS; los ejemplos que siguen usan el formato público de comandos SMS y los valores de servidor de Plaspy.

- Apunte el dispositivo al servidor compartido de Plaspy para que Plaspy reciba datos de ubicación y eventos.
- Configure el APN y, si aplica, las credenciales del APN para que el dispositivo tenga conectividad GPRS.
- Establezca el transporte y el puerto hacia el endpoint de Plaspy para garantizar que los datos lleguen al listener correcto.
- Configure el intervalo de reporte y la zona horaria para que marcas temporales y actualizaciones de posición se ajusten a sus necesidades.
- Valide la conectividad para que el dispositivo sea visible y operativo en Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de conexión a Plaspy al configurar el LS500:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador en el lado del servidor
- Todos los dispositivos en Plaspy usan el mismo puerto para el reporte

## Requisitos típicos antes de la configuración

- Una unidad LS500 instalada y alimentada, con acceso a su interfaz de configuración o capacidad de recibir comandos SMS.
- Una tarjeta SIM activa con datos y SMS habilitados, compatible con las redes celulares locales.
- Conocimiento de la contraseña predeterminada del dispositivo si va a aplicar la configuración por SMS. Los ejemplos abajo usan 123456 como contraseña por defecto.
- Acceso a un emisor de SMS (teléfono móvil o pasarela SMS) para enviar comandos de configuración al rastreador.
- Recepción GPS y cobertura de red confiables para completar el registro inicial y el reporte.
- Documentación o herramientas del fabricante para configuraciones avanzadas o instrucciones específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

El LS500 se configura para enviar su posición y eventos de dispositivo al endpoint y puerto compartido de Plaspy. Una vez configurados el APN y el servidor, el rastreador establecerá una conexión GPRS y enviará actualizaciones según el intervalo y el transporte configurados.

- El rastreador apunta al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Seleccione UDP o TCP según la opción del dispositivo; Plaspy acepta cualquiera de los dos y detecta el protocolo automáticamente.
- El dispositivo reporta según el intervalo configurado para que Plaspy muestre historial de ubicaciones y estado en tiempo real.
- El registro exitoso y los primeros reportes confirman que el dispositivo es visible en la plataforma Plaspy.
- El reporte de eventos y la monitorización operativa dependen del firmware del LS500 y del intervalo de reporte establecido.

## Flujo común de configuración

1. Acceda al método oficial de configuración ThingSys para el LS500, ya sea la interfaz de comandos SMS o una herramienta de configuración del fabricante.
2. Asegúrese de que la SIM esté insertada, el dispositivo alimentado y que la unidad tenga conectividad de red básica.
3. Introduzca la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes del dispositivo.
4. Establezca el puerto en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Configure el APN, usuario y contraseña del APN de su operador móvil si la SIM lo requiere.
6. Aplique o guarde la configuración y reinicie el dispositivo si la documentación o el dispositivo recomiendan un reinicio.
7. Valide que el dispositivo reporte a Plaspy revisando los registros del servidor o la plataforma Plaspy para el primer mensaje/ubicación exitosa.
8. Ajuste el intervalo de reporte y la zona horaria según sea necesario y confirme la visibilidad continua en Plaspy.

## Comandos de ejemplo para configuración

El LS500 soporta configuración por SMS. Los siguientes comandos se extraen del contenido público de configuración del dispositivo y se presentan en orden. Los ejemplos usan la contraseña por defecto 123456. Cambie la contraseña y los marcadores de posición según su implementación.

- Reset opcional a fábrica (use solo si necesita restaurar valores por defecto):
```text
FACTORY*123456
```
- Establecer la zona horaria a UTC más cero:
```text
TIMEZONE*123456*+00
```
- Configurar el APN del operador. Reemplace {{apn}} por el APN de su operador:
```text
APN*123456*{{apn}}
```
- Configurar usuario y contraseña del APN. Reemplace {{apnu}} y {{apnp}} por sus credenciales:
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```
- Configurar el servidor GPRS a la IP y puerto de Plaspy. Esto hace que el dispositivo reporte a Plaspy en el puerto requerido:
```text
IP*123456*54.85.159.138,8888
```
- Establecer el intervalo de actualización/reporte. El ejemplo fija el intervalo en 60 segundos:
```text
INTERVAL*123456*060
```

Notas sobre marcadores de posición y verificación:
- {{apn}} es la cadena APN del operador necesaria para las conexiones de datos GPRS.
- {{apnu}} y {{apnp}} son campos opcionales de usuario y contraseña APN si el operador requiere autenticación.
- El ejemplo anterior utiliza la IP del servidor y el puerto explícito como se muestra. Alternativamente puede ingresar d.plaspy.com en las herramientas del fabricante que acepten un nombre de dominio.
- El contenido público incluye una nota de verificación para revisar la configuración de TCP; asegúrese de que la selección de transporte coincida con su elección de configuración.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los comandos admitidos. Verifique los formatos exactos de SMS con la documentación de ThingSys para la versión de firmware de su dispositivo.
- El LS500 admite configuración por SMS según los ejemplos públicos mostrados; algunas instalaciones pueden preferir herramientas de configuración por cable o una app del fabricante si está disponible.
- Elija TCP o UDP según las necesidades de su despliegue; Plaspy acepta ambos y realiza detección automática del protocolo en el servidor.
- Mantenga presente la contraseña por defecto y, tras la configuración inicial, cámbiela mediante el método soportado si la seguridad del dispositivo lo requiere.
- Cuando use nombres de dominio como d.plaspy.com, confirme que la resolución DNS esté disponible en el entorno del dispositivo o use la IP 54.85.159.138 si DNS no está disponible.

## Por qué usar Plaspy con esta configuración

Usar el ThingSys LS500 con Plaspy proporciona a flotas y operadores un endpoint de servidor claro y consistente para recibir datos de ubicación y eventos. Apuntar el LS500 a d.plaspy.com o a 54.85.159.138 en el puerto 8888 facilita la incorporación porque Plaspy utiliza el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador. Esto reduce las diferencias en la configuración por dispositivo y simplifica despliegues a gran escala.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el LS500, visite https://www.plaspy.com. Para comandos específicos más recientes, comportamiento de firmware o detalles de revisiones de hardware, confirme la información actual en el sitio oficial de ThingSys https://www.thingsys.com/. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que se recomienda verificar la documentación más reciente.
