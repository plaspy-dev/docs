---
slug: /noran/nr016/configuration
id: nr016-configuration
sidebar_label: Configuration
title: Noran - NR016 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Noran NR016 con servidores y ajustes compartidos de Plaspy
keywords:
  - Configuración Noran NR016
  - Instalación Noran NR016
  - Configuración servidor Noran NR016
  - Configuración NR016 Plaspy
  - Configuración rastreador GPS NR016
  - Guía instalación rastreador Noran
  - Rastreador vehicular NR016
  - Configuración rastreador Plaspy
  - Guía instalación NR016
  - Flota GPS NR016
---

# Noran - NR016 Configuration

Esta página reúne la información pública necesaria para preparar el rastreador Noran NR016 y que funcione con Plaspy. Resume los ajustes de servidor y el flujo de configuración usados habitualmente según la documentación pública del fabricante y los requisitos de Plaspy, de modo que instaladores y gestores de flota puedan dejar el equipo listo para comunicarse con la plataforma.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El NR016 admite configuración por SMS y GPRS en los procedimientos publicados comúnmente; esta página integra esos comandos públicos y apunta las notas relevantes.

## Resumen de la configuración

Preparar el NR016 para Plaspy implica, sobre todo, ajustar su APN y el destino de reporte por GPRS para que el dispositivo envíe posiciones y eventos de alarma a los servidores de Plaspy. La configuración pública del NR016 suele realizarse por comandos SMS para establecer el APN, la IP del servidor y el modo GPRS, y luego se verifica con una consulta de estado.

- Configure el APN del operador móvil para que el dispositivo pueda abrir una sesión GPRS.
- Direccione el rastreador hacia los ajustes de servidor de Plaspy para que la telemetría y las alarmas lleguen a la plataforma.
- Cambie el dispositivo al modo de reporte por GPRS y confirme una conexión activa.
- Verifique la identidad y los ajustes del equipo para asegurar que el rastreador se mostrará en Plaspy.
- Valide en Plaspy los reportes de eventos y ubicación una vez que el dispositivo se conecte.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para reporte e identificación en la plataforma.
- IP de servidor 54.85.159.138 a la que puede apuntarse el tráfico de los dispositivos.
- Puerto 8888 que se utiliza para todos los dispositivos en Plaspy.
- Soporte de transporte UDP o TCP en el puerto 8888 según la selección del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que usan protocolos estándar serán identificados al conectar.

## Requisitos previos habituales

- Un NR016 instalado con alimentación y cableado correctos según las buenas prácticas de instalación.
- Una tarjeta SIM activa con datos habilitados y el APN correcto del operador móvil.
- Acceso a SMS desde un teléfono o módem para enviar los comandos de configuración del fabricante si usa la configuración por SMS.
- Conocimiento de la contraseña por defecto del dispositivo si los comandos SMS la requieren; la guía pública muestra 000000 como contraseña por defecto.
- Acceso al manual de configuración oficial de Noran o a la herramienta de instalador para instrucciones específicas de firmware.
- Una cuenta o espacio de configuración en Plaspy para asociar y monitorear el dispositivo una vez que se conecte.

## Cómo se conecta este rastreador a Plaspy

El NR016 envía ubicación, eventos de alarma y telemetría por datos móviles al endpoint y puerto compartidos de Plaspy. Una vez que el equipo abre la sesión GPRS y envía sus mensajes de protocolo al endpoint de Plaspy, la plataforma procesa esos mensajes y los presenta en mapas, alertas e informes.

- Envía datos de localización GPS e híbrida al endpoint de Plaspy en el puerto 8888.
- Reenvía alarmas como SOS, exceso de velocidad, geovalla y vibración hacia Plaspy.
- Reporta estados de entradas digitales y analógicas como ACC y sensores de puerta para registro de viajes y seguridad.
- Usa UDP o TCP en el puerto 8888 según la configuración seleccionada.
- Tras la conexión, Plaspy detecta el protocolo automáticamente y hace visible el dispositivo en la plataforma.

## Flujo de configuración típico

1. Acceda al método oficial de configuración Noran para su NR016, normalmente mediante comandos SMS o la guía y herramientas del instalador.
2. Configure el APN del operador usando el SMS o la herramienta para que el dispositivo pueda establecer GPRS.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección de servidor según prefiera dominio o IP directa.
4. Configure el puerto de servidor a 8888, que es el puerto compartido de Plaspy para todos los equipos.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el modo de transporte.
6. Aplique o guarde la configuración y cambie el dispositivo al modo de reporte por GPRS.
7. Reinicie o haga un ciclo de alimentación del equipo si el firmware lo exige.
8. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma y usando el comando SMS de verificación de estado del equipo.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del NR016 suelen enviarse por SMS. La contraseña por defecto usada en ejemplos públicos es 000000. Mantenga los marcadores (placeholders) al reemplazar valores.

- Configurar el APN del operador
  - Reemplace [apn] por el APN de su red. Si el APN requiere usuario o contraseña incluya [apnu] y [apnp] como se muestra.
  ```sms
  A000000,012,[apn]{{,[apnu],[apnp]}}
  ```
  Nota: La plantilla en alguna documentación del fabricante muestra un formato separado por comas. Use la variante que requiera su firmware. Los marcadores significan:
  - [apn] es el APN de datos móviles
  - [apnu] es el usuario del APN cuando se requiere
  - [apnp] es la contraseña del APN cuando se requiere

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto mostrados en la documentación de Plaspy
  ```sms
  A000000,010,54.85.159.138,8888
  ```

- Cambiar el dispositivo al modo GPRS para que reporte al servidor configurado
  ```sms
  A000000,011,1
  ```

- Comprobar ajustes actuales y estado del dispositivo
  ```sms
  A000000,004
  ```
  La respuesta de estado normalmente incluye el Id del dispositivo (la primera palabra que empieza con NR), APN, servidor y puerto, estado GPRS (1), estado de conexión GPRS (1) y nivel de señal GSM.

Mantenga el orden de comandos al realizar la configuración inicial: APN primero, servidor después y luego habilitar el reporte GPRS. Use el comando de estado para confirmar los valores y obtener el Id del dispositivo para el registro en Plaspy.

## Notas de configuración

- Los comandos SMS públicos y sus formatos pueden variar según la versión de firmware. Confirme la sintaxis SMS exacta en la documentación oficial de Noran antes de enviar comandos.
- La configuración puede hacerse por SMS o mediante el software de instalador del fabricante según la revisión de hardware y las herramientas locales del instalador.
- Elija UDP o TCP de forma intencional; el comportamiento puede diferir según la red y el firmware. Plaspy acepta ambos en el puerto compartido 8888 y detecta el protocolo automáticamente.
- Recuerde que todos los dispositivos que reportan a Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de servidor entre distintos modelos de rastreadores.
- La contraseña por defecto publicada en ejemplos públicos es 000000. Verifique la contraseña actual del dispositivo y cámbiela si es necesario por seguridad.

## Por qué usar Plaspy con esta configuración

Usar el NR016 con Plaspy centraliza la ubicación de los vehículos, los eventos de alarma y la telemetría en una sola plataforma, lo que permite a operadores de flota y equipos de seguridad monitorear activos, recibir alertas oportunas y acceder a reportes históricos. Las funciones antirrobo y las entradas múltiples del NR016 se integran bien con los paneles y reglas de alerta de Plaspy, por lo que resulta apropiado para vehículos, taxis y flotas comerciales donde se requiere control remoto y respuesta rápida ante incidentes.

Learn more about Plaspy and how platform level features work with connected trackers at https://www.plaspy.com. Manufacturer specifications and setup methods change over time; verify the latest device specific configuration and firmware behavior on the official Noran website http://www.norantracker.com/ before installation.
