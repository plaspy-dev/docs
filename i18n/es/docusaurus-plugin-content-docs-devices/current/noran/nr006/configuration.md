---
slug: /noran/nr006/configuration
id: nr006-configuration
sidebar_label: Configuration
title: Noran - NR006 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Noran NR006 y su compatibilidad con Plaspy
keywords:
  - Configuración Noran NR006
  - Instalación Noran NR006
  - Noran NR006 Plaspy
  - Configuración rastreador GPS NR006
  - Configuración servidor NR006
  - Instalación tracker Noran
  - Configuración Plaspy rastreador
  - Configuración plataforma GPS NR006
  - Configuración SMS Noran NR006
  - Configuración GPRS NR006
---

# Noran - NR006 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Noran NR006 Mini GPS con Plaspy. Aquí encontrará los ajustes de servidor prácticos, comandos de ejemplo y el flujo típico que puede seguir para preparar el NR006 y que reporte ubicación y eventos a la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos y pasos aquí como una guía pública práctica y verifíquelos con la documentación oficial de Noran cuando sea necesario.

## Resumen de configuración

Este proceso prepara el NR006 para enviar sus paquetes de posición y alarmas a Plaspy, de modo que el equipo sea visible en su cuenta. La configuración pública suele realizarse por comandos SMS o mediante la herramienta del fabricante para ajustar el APN del operador, el endpoint del servidor GPRS y el modo de transporte de datos.

- Configure el APN del dispositivo para que pueda establecer conexiones GPRS.
- Apunte el rastreador al endpoint del servidor de Plaspy para que los paquetes de posición lleguen a la plataforma.
- Seleccione la opción de transporte adecuada según si el dispositivo requiere UDP o TCP.
- Active el modo de reporte por GPRS para que el rastreador envíe paquetes por Internet en lugar de solo por SMS.
- Verifique la identidad del dispositivo y sus ajustes actuales para confirmar que está reportando a Plaspy.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com debe usarse cuando el dispositivo acepta un nombre de dominio como endpoint del servidor.
- La IP del servidor 54.85.159.138 puede usarse cuando el dispositivo requiere una dirección numérica.
- El puerto 8888 es el puerto de ingestión de Plaspy y se utiliza para todos los dispositivos en la plataforma.
- Soporte de transporte por UDP o TCP según lo que requiera o soporte el dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos, por lo que puede usar el puerto y el endpoint compartidos.

## Requisitos previos antes de la configuración

- Un NR006 con alimentación y una tarjeta SIM activa que soporte datos GPRS y SMS según sea necesario.
- Credenciales APN del operador móvil para la conectividad de datos.
- Acceso al método de configuración del NR006 proporcionado por el fabricante, como comandos SMS o herramientas del proveedor.
- Conocimiento de la contraseña del dispositivo si se ha cambiado respecto al valor de fábrica.
- Un medio para recibir o monitorear las respuestas del dispositivo (respuesta SMS o verificación dentro de Plaspy) para confirmar los ajustes.
- Acceso físico o soporte de un instalador si se requiere reinicio o reinstalación tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El NR006 transmite paquetes concisos de posición y eventos de alarma a Plaspy para que la plataforma entregue ubicación en tiempo real, reproducción histórica y alertas. Cuando está correctamente configurado, el rastreador reportará por GPRS al endpoint y puerto compartidos de Plaspy.

- El rastreador se configura con el dominio o IP del servidor de Plaspy para que los paquetes salientes apunten a Plaspy.
- Los paquetes de posición y eventos se envían por GPRS a la IP 54.85.159.138 de Plaspy en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y los requisitos del operador.
- Plaspy detecta automáticamente el protocolo e ingiere los paquetes entrantes para mostrarlos en tiempo real y generar alertas.
- La visibilidad del dispositivo en Plaspy se valida observando los paquetes entrantes o las respuestas de estado después de la configuración.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del Noran NR006, por ejemplo comandos SMS o el software del proveedor según la documentación del fabricante.
2. Ingrese el servidor de Plaspy como d.plaspy.com o como la IP 54.85.159.138 según lo que acepte el dispositivo.
3. Ajuste el puerto del servidor a 8888, que es el puerto común de Plaspy para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en la configuración del dispositivo si el rastreador requiere una selección explícita de transporte.
5. Configure el APN del equipo y cualquier credencial de APN que requiera su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o prácticas de instalación lo requieren.
7. Valide que el dispositivo reporte a Plaspy revisando los paquetes entrantes, usando el comando de estado del dispositivo o observando el rastreador en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El NR006 puede configurarse mediante comandos SMS. Los siguientes comandos públicos son ejemplos mostrados en el contenido oficial del fabricante. Estos ejemplos usan la contraseña de fábrica 000000 en la cadena del comando. Si su contraseña ha sido cambiada, reemplace la parte de la contraseña según corresponda.

- Establecer el APN del operador
  - Reemplace [apn] por el APN de su operador. Si su operador requiere usuario o contraseña de APN incluya [apnu] y [apnp] como se muestra.
```text
A000000,012,[apn]
```
- Establecer el APN del operador incluyendo usuario y contraseña cuando aplique
```text
A000000,012,[apn],[apnu],[apnp]
```
- Establecer el servidor GPRS hacia Plaspy usando la IP y el puerto de Plaspy
```text
A000000,010,54.85.159.138,8888
```
- Cambiar el dispositivo a modo de reporte por GPRS
```text
A000000,011,1
```
- Consultar ajustes y estado actuales del dispositivo
```text
A000000,004
```

Notas sobre estos comandos
- El prefijo de ejemplo A000000 emplea la contraseña de fábrica 000000. Reemplace los seis ceros con la contraseña de su equipo si difiere.
- El comando de verificación A000000,004 devuelve una cadena de estado que incluye el Id del dispositivo como la primera palabra que comienza con NR y también informa APN, servidor, puerto, modo GPRS y valores de señal.
- Mantenga el orden al aplicar estos comandos: configure primero el APN, luego el servidor, luego active el modo GPRS y por último verifique.

## Notas de configuración

- La configuración por SMS es de uso común para el NR006, aunque las herramientas del fabricante o las actualizaciones de firmware pueden ofrecer métodos alternativos.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos u opciones disponibles; verifique los comandos contra la documentación actual de Noran.
- Cuando el dispositivo requiera selección entre TCP o UDP, elija el transporte que soporte su operador y las condiciones de red; Plaspy aceptará ambos en el puerto 8888.
- El servidor y puerto de Plaspy se comparten entre dispositivos, por lo que utilice siempre el puerto 8888 en la configuración para ingestión en Plaspy.
- Confirme siempre la contraseña y el Id del dispositivo después de la configuración para que Plaspy pueda identificar correctamente la unidad.

## Por qué usar Plaspy con esta configuración

Integrar el NR006 con Plaspy ofrece seguimiento discreto y de bajo consumo de datos, ideal para motocicletas y vehículos pequeños, a la vez que entrega la telemetría y las alertas que las organizaciones necesitan para visibilidad y supervisión operativa. La forma compacta del NR006 y el diseño de paquetes concisos lo hace adecuado para despliegues que priorizan el uso mínimo de datos y el seguimiento continuo.

Aprenda más sobre cómo funciona esta configuración en el sitio de Plaspy https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante, verifique las instrucciones en el sitio del fabricante http://www.norantracker.com/ ya que las especificaciones y los pasos de configuración pueden cambiar con el tiempo.
