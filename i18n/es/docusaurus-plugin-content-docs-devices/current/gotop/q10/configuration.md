---
slug: /gotop/q10/configuration
id: q10-configuration
sidebar_label: Configuration
title: GOTOP - Q10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP Q10 y conectarlo a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - Configuración GOTOP Q10
  - Instalación GOTOP Q10
  - Configuración GOTOP Q10 Plaspy
  - Instalación rastreador Q10
  - Configuración rastreador GOTOP
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Instalación rastreador personal
  - Configuración GPRS rastreador
  - Configuración software seguimiento Q10
---

# GOTOP - Q10 Configuración

Esta página describe el contexto público de configuración para usar el rastreador SOS GPS GOTOP Q10 con Plaspy. Se centra en los pasos prácticos y los ajustes de servidor necesarios para dirigir los reportes GPRS del Q10 hacia la plataforma Plaspy, de modo que la ubicación, las alertas SOS y la telemetría sean visibles en los mapas e informes de Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador utilizado por el Q10. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por eso esta guía se concentra en los ajustes públicos de Plaspy y en un flujo de trabajo práctico en lugar de entrar en detalles internos del dispositivo.

## Resumen de la configuración

El objetivo al configurar un GOTOP Q10 para Plaspy es apuntar el reporte GPRS del dispositivo al endpoint de Plaspy, confirmar conectividad fiable y verificar que la posición, las alertas SOS y los eventos de alarma se entreguen a su instancia de Plaspy para monitoreo en tiempo real y registro histórico.

- Configure el Q10 para enviar reportes GPRS al endpoint de servidor de Plaspy para que las posiciones aparezcan en los mapas en vivo.
- Asegúrese de que el APN del dispositivo y el plan de datos de la SIM permitan GPRS para que el rastreador pueda alcanzar Plaspy.
- Seleccione la opción de transporte (UDP o TCP) y el puerto común de Plaspy para que el Q10 se comunique de forma confiable.
- Valide el reporte del dispositivo y el comportamiento de alarmas en Plaspy tras guardar la configuración para confirmar visibilidad de telemetría y SOS.
- Utilice las herramientas del fabricante o comandos SMS proporcionados por GOTOP para aplicar los ajustes de servidor y transporte.

## Ajustes de servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- El transporte puede configurarse en UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de configurar

- Un GOTOP Q10 con carga suficiente, con la SIM recomendada por el fabricante instalada y un plan de datos activo para GPRS.
- Acceso al método de configuración del Q10 proporcionado por GOTOP, ya sea la app oficial, la herramienta web o el conjunto de comandos SMS.
- Conocimiento del APN de la red móvil de la SIM para habilitar el reporte de datos.
- Un periodo de prueba con buena cobertura celular para verificar el reporte GPRS hacia Plaspy.
- Credenciales de cuenta de Plaspy y acceso a la plataforma para visualizar el dispositivo una vez que empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reporte GPRS, el Q10 envía secuencias de ubicación y eventos al endpoint del servidor Plaspy en el puerto compartido. Plaspy recibe las actualizaciones de posición y eventos, determina automáticamente el protocolo y muestra el dispositivo en mapas en vivo y en reproducción histórica.

- El Q10 reporta actualizaciones periódicas a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Las alertas SOS y las coordenadas de emergencia se envían a Plaspy y pueden mostrarse o integrarse en flujos de alerta.
- Las alertas de geocerca y las notificaciones de batería baja se entregan a Plaspy para monitoreo y notificaciones.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que generalmente no es necesario especificar un tipo de protocolo personalizado en la plataforma.
- Seleccionar UDP o TCP en el Q10 determina el transporte para el envío de paquetes al puerto 8888.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración del GOTOP Q10 proporcionado por el fabricante, como el conjunto de comandos SMS, la app móvil o la herramienta de configuración.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según requiera la herramienta del dispositivo.
3. Configure el puerto de reporte del dispositivo en 8888 y asegúrese de que ese puerto se use con el transporte seleccionado.
4. Elija el protocolo de transporte UDP o TCP en el Q10 si el dispositivo exige seleccionar el transporte.
5. Configure el APN de la SIM y cualquier credencial requerida por el operador para permitir el tráfico GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el Q10 o su herramienta requieren reboot.
7. Valide que el Q10 reporte a Plaspy comprobando las actualizaciones de ubicación en vivo y los mensajes de evento en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar un GOTOP Q10 dependen del conjunto de comandos del fabricante o de la herramienta usada. Dado que el Q10 soporta reporte GPRS, normalmente deberá indicar el dominio o la IP del servidor Plaspy y el puerto compartido 8888, además de seleccionar UDP o TCP como transporte. Si usa comandos SMS o la app de configuración GOTOP, consulte el manual oficial de GOTOP para los formatos precisos.

Ejemplos conceptuales de entradas SMS o de configuración que puede encontrar (la sintaxis varía según el firmware):
- Configurar dominio del servidor
```
server d.plaspy.com
```
- O configurar IP del servidor
```
server 54.85.159.138
```
- Configurar puerto y transporte
```
port 8888
transport udp
```
- Guardar y reiniciar si es necesario
```
save
reboot
```

Nota: Las palabras clave de los comandos SMS y el orden de los parámetros variarán según el firmware. Verifique siempre los comandos precisos en la documentación de GOTOP.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos y la ubicación de los menús; confirme el procedimiento correcto para la revisión de su dispositivo.
- Para telemetría fiable, asegúrese de que el APN del operador esté correctamente configurado en el Q10 para que se puedan establecer conexiones GPRS hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP según las características de la red local; UDP puede preferirse por menor overhead, mientras que TCP puede ofrecer entrega más fiable en algunas redes.
- Si utiliza configuración vía SMS, siga exactamente los ejemplos del fabricante y pruebe que el reporte GPRS está activo después.
- Reiniciar el dispositivo tras guardar la configuración es comúnmente necesario para que los nuevos ajustes de servidor entren en efecto.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP Q10 para reportar a Plaspy ofrece a cuidadores, equipos operativos y gestores de activos visibilidad en tiempo real de la ubicación, eventos SOS y alarmas desde un rastreador personal compacto. Con Plaspy, los equipos pueden ver el seguimiento en vivo sobre mapas, recibir notificaciones de alarma y revisar la telemetría histórica para investigación e informes.

Para obtener más información sobre el uso de Plaspy con rastreadores soportados y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes del dispositivo, notas de firmware e instrucciones del fabricante para el GOTOP Q10, consulte el sitio oficial de GOTOP https://www.gotop.cc/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
