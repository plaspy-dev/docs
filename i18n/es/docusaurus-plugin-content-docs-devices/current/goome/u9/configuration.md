---
slug: /goome/u9/configuration
id: u9-configuration
sidebar_label: Configuration
title: Goome - U9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Goome U9 con ajustes de servidor Plaspy y comandos SMS para conectar el dispositivo
keywords:
  - Configuración Goome U9
  - Instalación Goome U9
  - Configuración servidor Goome U9
  - Configuración U9 Plaspy
  - Rastreador GPS Goome
  - Configuración SMS U9
  - Configuración plataforma Goome
  - Rastreo vehicular Goome U9
  - Configuración plataforma rastreador GPS
  - Ajustes APN Goome U9
---

# Goome - Configuración del U9

Esta página documenta el contexto público de configuración para usar el rastreador GPS Goome U9 con la plataforma Plaspy. Se enfoca en los ajustes de servidor y los comandos SMS prácticos que se usan comúnmente para apuntar un dispositivo U9 hacia Plaspy y habilitar el reporte de ubicación y eventos. Utilice esta guía para configurar la conectividad y verificar que el dispositivo informe correctamente a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Goome U9 admite configuración por SMS para los ajustes de red y el servidor GPRS; por eso esta página incluye los comandos SMS disponibles públicamente.

## Resumen de la configuración

El objetivo del proceso de configuración es dejar el Goome U9 listo para comunicarse de forma fiable con la plataforma de rastreo Plaspy y que aparezca en su cuenta de Plaspy. Para el U9, los comandos SMS proporcionados por el fabricante son una forma práctica y habitual de aplicar la configuración de red y servidor necesaria para la compatibilidad con Plaspy.

- Apuntar el dispositivo al endpoint de Plaspy para que el rastreador envíe paquetes de ubicación y eventos.
- Configurar el APN del dispositivo para que el U9 pueda conectarse al servicio de datos móviles y reportar por GPRS.
- Establecer el puerto compartido de Plaspy para que el servidor acepte conexiones desde el dispositivo.
- Elegir UDP o TCP como transporte en el dispositivo si la interfaz de configuración lo requiere.
- Validar la conectividad consultando la configuración del dispositivo y comprobando los reportes en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un dispositivo Goome U9 alimentado e instalado según las instrucciones del fabricante.
- Una tarjeta SIM activa con datos móviles y la información correcta del APN del operador.
- Capacidad para enviar SMS al dispositivo para la configuración por SMS o acceso a la herramienta oficial de configuración de Goome si está disponible.
- El APN y, opcionalmente, el usuario y la contraseña del APN proporcionados por su operador móvil.
- Acceso a Plaspy y confirmación de que el IMEI o identificador del dispositivo quedará registrado o será visible tras la configuración.
- Familiaridad básica con el envío de comandos SMS y la verificación de respuestas del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El Goome U9 se configura para reportar posiciones y eventos del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez que el servidor GPRS del dispositivo apunte a la dirección de Plaspy y el APN sea correcto, el U9 iniciará conexiones de red (UDP o TCP) hacia Plaspy donde el protocolo se detectará automáticamente.

- El rastreador envía actualizaciones de ubicación y estado del dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que la configuración del puerto es consistente entre implementaciones.
- El dispositivo puede usar UDP o TCP según la configuración; seleccione el transporte adecuado en la instalación si es necesario.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los datos entrantes a la sesión de dispositivo correcta.
- Los reportes de eventos como alarmas, SOS y telemetría se vuelven visibles en Plaspy una vez que el dispositivo se conecta correctamente.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración del Goome U9, o prepárese para enviar comandos SMS según la documentación de Goome.
2. Ingrese la dirección del servidor Plaspy como dominio d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor/GPRS del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para los rastreadores compatibles.
4. Elija UDP o TCP como transporte en el dispositivo si la configuración requiere seleccionar un protocolo de transporte.
5. Configure el APN del operador y, si es necesario, el usuario y la contraseña del APN en el dispositivo.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el flujo de trabajo del equipo lo requiere.
7. Valide que el dispositivo informe a Plaspy consultando las respuestas de estado del equipo y confirmando su visibilidad en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Para configurar el U9 vía SMS, envíe los comandos siguientes en el orden indicado. Tenga en cuenta que el restablecimiento de fábrica es opcional y debe usarse solo cuando sea necesario.

1. Restablecimiento de fábrica opcional (solo si necesita un estado limpio inicial)
```
FACTORY#
```

2. Establecer el APN del operador. Reemplace [apn] por el APN de su operador. Si el APN requiere usuario o contraseña, incluya [apnu] y [apnp] en ese orden separados por comas.
```
APN,[apn],[apnu],[apnp]#
```
- Explicación: [apn] es la cadena del APN de datos móviles. [apnu] es el marcador de usuario del APN. [apnp] es el marcador de contraseña del APN. Si no se requiere usuario o contraseña, puede omitir los marcadores finales al enviar el SMS.

3. Configurar el servidor GPRS a Plaspy usando la IP y el puerto. Esto apunta el dispositivo a Plaspy en el puerto 8888.
```
GPRSSET,54.85.159.138,8888#
```
- Alternativa: Si su dispositivo acepta un dominio en lugar de IP, use d.plaspy.com en la interfaz de configuración del dispositivo o el comando SMS equivalente si está soportado.

4. Ejemplo para configurar intervalo de reporte cada 60 segundos
```
TIMER,60#
```

Comandos de verificación

- Para comprobar el servidor GPRS configurado en el dispositivo:
```
GPRSSET#
```

- Para verificar el estado general del dispositivo:
```
STATUS#
```

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el comportamiento de los comandos SMS o los parámetros disponibles; confirme la sintaxis exacta con la documentación de Goome para su firmware específico.
- La configuración por SMS es de uso común para el U9 y se muestra aquí porque forma parte de la guía pública de configuración de este modelo.
- Elija TCP o UDP según las necesidades de la instalación; ambos transportes son compatibles y Plaspy aceptará cualquiera en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica las implementaciones con múltiples modelos.
- Si prefiere utilizar una herramienta o plataforma de configuración del fabricante, los mismos valores de servidor y puerto (d.plaspy.com o 54.85.159.138 y puerto 8888) son aplicables.

## Por qué usar Plaspy con esta configuración

Usar el Goome U9 con Plaspy ofrece una forma directa de consolidar los datos de rastreo en una única plataforma para monitoreo y operaciones. Los ajustes de servidor compartidos de Plaspy reducen la complejidad de configuración en flotas grandes y la detección automática de protocolos ayuda a minimizar las tareas de selección de protocolo por dispositivo.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el Goome U9, visite https://www.plaspy.com. Verifique siempre los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de Goome http://www.goomegpstracker.com ya que las especificaciones y los comandos pueden cambiar con el tiempo.
