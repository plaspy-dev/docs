---
slug: /atrack/ak1/configuration
id: ak1-configuration
sidebar_label: Configuration
title: ATrack - AK1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador ATrack AK1 para compatibilidad con Plaspy con detalles de servidor y comandos de ejemplo
keywords:
  - Configuración ATrack AK1
  - Configurar ATrack AK1
  - ATrack AK1 Plaspy
  - Configuración servidor AK1
  - Configuración GPS AK1
  - Configuración plataforma AK1
  - Configuración rastreador Plaspy
  - Instalación rastreador vehículo AK1
  - Configuración GPRS AK1
  - Integración ATrack AK1
---

# ATrack - AK1 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador ATrack AK1 con Plaspy. Resume los ajustes de servidor compartidos que debe aplicar al dispositivo e incluye comandos AT de ejemplo que forman parte del script de configuración público del modelo. Use esta guía para preparar el AK1 y lograr que se comunique y reporte a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware del AK1, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos AT de ejemplo que se muestran a continuación son el script público disponible para el AK1 y deben aplicarse con cuidado según sus procedimientos de instalación.

## Resumen de la configuración

Esta configuración prepara el AK1 para enviar datos de localización y reportes de eventos a Plaspy, de modo que el dispositivo sea visible y administrable en la plataforma. El script público de ejemplo se centra en habilitar el reporte de eventos, establecer un intervalo de rastreo, cambiar el dispositivo al formato binario y apuntarlo al endpoint GPRS de Plaspy.

- Configure las reglas de reporte de ACC y eventos para que el rastreador informe encendido del motor y eventos de entradas relacionadas a Plaspy.
- Establezca un intervalo periódico de rastreo para que las actualizaciones de ubicación se envíen a la plataforma (el ejemplo usa 60 segundos).
- Cambie el AK1 al formato de datos esperado por el servidor (el ejemplo establece modo binario).
- Configure los parámetros GPRS incluyendo los marcadores de APN y el endpoint del servidor Plaspy para que el AK1 pueda establecer sesión de datos.
- Valide la conectividad y el estado del dispositivo con la consulta de información mostrada en los comandos de ejemplo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; configure el dispositivo según el transporte requerido
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un AK1 con alimentación y acceso a su interfaz de configuración o al método de configuración del fabricante
- Una tarjeta SIM activa con datos GPRS y la configuración APN correcta de su operador móvil
- Credenciales o marcadores de APN como [apn], [apnu] y [apnp] listos para insertar en la configuración del equipo
- Acceso a las herramientas de configuración de ATrack o a la interfaz serial/SMS según la documentación del dispositivo
- Conocimiento de la versión de firmware y la revisión de hardware del dispositivo para seguir el flujo de configuración adecuado
- Capacidad para reiniciar o quitar y volver a poner alimentación al equipo tras aplicar los ajustes

## Cómo se conecta este rastreador a Plaspy

El AK1 envía datos de localización y eventos al endpoint y puerto compartidos de Plaspy para que el vehículo sea visible en la plataforma. Plaspy recibe la conexión del dispositivo y detecta automáticamente el protocolo del rastreador, lo cual permite que la plataforma analice los paquetes entrantes del AK1 sin cambiar puertos por dispositivo.

- El dispositivo se configura para reportar al endpoint de Plaspy en d.plaspy.com (o 54.85.159.138)
- Todos los reportes se dirigen al puerto 8888 que Plaspy utiliza para los dispositivos soportados
- El rastreador transmite actualizaciones periódicas de trazas (la configuración de ejemplo usa un intervalo de 60 segundos)
- Se activa el reporte de eventos como ACC on/off para que la plataforma muestre cambios de estado de encendido y entradas
- Plaspy detecta automáticamente el protocolo entrante, por lo que no es necesaria una selección de protocolo especial en el lado de la plataforma

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de ATrack o al software que aplica comandos AT o ajustes para el AK1.
2. Ingrese el servidor de Plaspy ya sea como el dominio d.plaspy.com o la dirección IP 54.85.159.138 según la interfaz de configuración.
3. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para la configuración GPRS.
5. Aplique los ajustes específicos del AK1 como eventos ACC, intervalo de rastreo, formato de datos y servidor GPRS con los marcadores de APN según sea necesario.
6. Guarde o cargue la configuración y reinicie el AK1 si el dispositivo o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y usando el comando de verificación mostrado en la sección de ejemplos.

## Comandos de configuración de ejemplo

La configuración pública del modelo proporciona una secuencia de comandos estilo AT para el AK1. Aplíquelos en el orden mostrado mediante el método de configuración soportado. Los marcadores como [apn], [apnu] y [apnp] deben sustituirse por el APN y las credenciales del operador cuando sea requerido.

1) Configure los disparadores de eventos ACC y el comportamiento de reporte asociado
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```
- Estos comandos configuran el comportamiento de las entradas y las acciones de reporte para eventos de ACC o entradas digitales. Aplíquelos en conjunto para que las reglas de eventos sean consistentes.

2) Establezca el intervalo de tiempo a 60 segundos para el rastreo periódico
```text
AT$TRAC=1,60,,,,,2
```
- Esto configura el rastreador para enviar actualizaciones de traza cada 60 segundos. Ajuste el intervalo según sus requerimientos de monitoreo.

3) Establezca el modo binario para el formato de mensajes del dispositivo
```text
AT$FORM=1,@P,0,""
```
- Pone al AK1 en el formato binario esperado por algunos analizadores de servidor. Mantenga esto si su servidor y plataforma esperan paquetes binarios.

4) Configure el servidor GPRS y los parámetros APN para apuntar a Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
- Reemplace [apn], [apnu] y [apnp] con el APN, usuario y contraseña de su operador móvil si es necesario. Este comando establece el perfil GPRS y dirige el dispositivo a la IP del servidor Plaspy y al puerto 8888. También puede usar d.plaspy.com donde el dispositivo acepte nombres de dominio.

5) Verifique el estado del dispositivo
```text
AT$INFO=?
```
- Use este comando de verificación para consultar el estado del dispositivo después de la configuración y confirmar ajustes y conectividad.

## Notas de configuración

- Las variaciones de firmware pueden cambiar los comandos AT disponibles y el orden de parámetros; confirme siempre los comandos con la documentación del firmware del AK1 antes de aplicarlos.
- Mantenga los marcadores de APN [apn], [apnu] y [apnp] tal como aparecen en los ejemplos y reemplácelos por los valores del operador durante la instalación.
- Elija UDP o TCP según la interfaz de configuración del dispositivo y sus requisitos de red; Plaspy acepta ambos transportes en el puerto 8888.
- Si el dispositivo admite nombres de dominio, puede usar d.plaspy.com en lugar de la IP 54.85.159.138; ambos apuntan al mismo endpoint de Plaspy.
- Tras aplicar los ajustes, realice un reinicio completo o un ciclo de energía del AK1 si el firmware del dispositivo lo requiere para activar los perfiles nuevos.

## Por qué usar Plaspy con esta configuración

Usar el ATrack AK1 con Plaspy ofrece una forma práctica de centralizar la visibilidad del vehículo, el reporte de eventos y el monitoreo operativo. Con el AK1 configurado para reportar al endpoint y puerto compartidos de Plaspy, las organizaciones reciben actualizaciones de ubicación y eventos de entrada consistentes para soportar la gestión de flotas, recuperación y flujos de trabajo telemáticos.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el ATrack AK1 visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo y deberían verificarse en el sitio del fabricante https://www.atrack.com.tw/ antes de desplegar a gran escala.
