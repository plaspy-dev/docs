---
slug: /coban/bn_403c/configuration
id: bn_403c-configuration
sidebar_label: Configuration
title: Coban - BN-403C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Coban BN-403C con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - configuración Coban BN 403C
  - configuración BN 403C Plaspy
  - configuración rastreador Coban
  - configuración servidor BN 403C
  - configuración GPS BN 403C
  - comandos SMS BN 403C
  - configuración rastreador Plaspy
  - rastreador vehicular BN 403C
  - configuración telemetría BN 403C
  - configuración plataforma GPS Coban
---

# Coban - BN-403C Configuración

Esta página describe el contexto público de configuración para usar el rastreador Coban BN-403C con Plaspy. Aquí encontrará los ajustes de servidor que Plaspy espera, los requisitos habituales antes del despliegue y los comandos SMS públicos disponibles para el BN-403C cuando se publican. Use esta guía para preparar el equipo y confirmar la conectividad con Plaspy antes de registrar el dispositivo en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre contraste estas instrucciones públicas con la documentación del proveedor y los procedimientos del instalador que esté utilizando.

## Resumen de configuración

Este proceso prepara al BN-403C para comunicarse con Plaspy y reportar ubicación, alarmas y telemetría de forma confiable. Los pasos públicos de configuración suelen ajustar el APN del dispositivo, el modo de transporte, el endpoint del servidor, el intervalo de reporte y las banderas de protocolo opcionales usando comandos SMS o la herramienta del fabricante.

- Configure el APN del dispositivo y, si aplica, las credenciales APN para que los datos celulares estén disponibles.
- Configure el dispositivo para reportar al endpoint y puerto del servidor Plaspy.
- Seleccione el modo de transporte (UDP o TCP) según las condiciones de la red.
- Defina los intervalos de reporte y habilite las funciones de protocolo necesarias para telemetría y sensores.
- Verifique los ajustes y confirme que el dispositivo sea visible y esté reportando en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Un BN-403C alimentado, con la alimentación del vehículo o la batería de respaldo conectada y funcional
- Una SIM celular activa provisionada para datos con el APN del operador
- Acceso a SMS en el dispositivo para aplicar comandos de configuración vía SMS si va a usar ese método
- Acceso al método de configuración del fabricante o a la herramienta Bluetooth para configuración local si lo prefiere
- Conocimiento del APN, usuario APN y contraseña APN del operador móvil elegido
- Una forma de validar el dispositivo en la plataforma Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El BN-403C envía posiciones GNSS, notificaciones de eventos y telemetría a Plaspy reportando al endpoint y puerto compartidos de Plaspy. Plaspy procesa esos mensajes y los asocia con la instancia del dispositivo para que usted pueda ver ubicación en tiempo real, alertas e historial en la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP; elija el que funcione mejor para la red y el firmware del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al puerto compartido
- Las actualizaciones de posición, alarmas y eventos de sensores se reenvían a Plaspy para monitoreo en vivo y notificaciones
- Tras la configuración, el dispositivo debería aparecer como reportando en Plaspy y poblar datos de ubicación y eventos

## Flujo común de configuración

1. Acceda al método oficial de configuración Coban que planea usar, como comandos SMS o la herramienta Bluetooth/software de Coban.
2. Ingrese el servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de configuración GPRS o servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración en el dispositivo usando el método del fabricante (envíe SMS, use Bluetooth o una app de configuración).
6. Reinicie o corte la alimentación del dispositivo si el firmware lo requiere para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando la actividad del dispositivo y las actualizaciones de posición en la plataforma.

## Ejemplos de comandos de configuración

El BN-403C soporta configuración vía SMS. El fabricante publicó estos comandos SMS públicos. La contraseña por defecto mostrada en los comandos es 123456. Reemplace los marcadores y la contraseña según corresponda para su equipo.

- Reinicio opcional a fábrica (use solo si necesita restaurar valores predeterminados)
```sms
begin123456
```

- Ajustar la zona horaria a UTC 0
```sms
time zone123456 0
```

- Establecer el APN del operador
```sms
apn123456 [apn]
```
Nota: [apn] es un marcador para la cadena APN de su operador móvil.

- Establecer el usuario y la contraseña del APN
```sms
up123456 [apnu] [apnp]
```
Nota: [apnu] y [apnp] son marcadores para el usuario y la contraseña del APN. Déjelos en blanco si no son necesarios.

- Configurar el servidor GPRS con la IP y el puerto de Plaspy
```sms
adminip123456 54.85.159.138 8888
```
Esto configura el dispositivo para reportar directamente a Plaspy en el puerto 8888. Alternativamente, puede usar d.plaspy.com cuando el dispositivo soporte nombres de dominio.

- Establecer el intervalo de actualización de posición
```sms
fix060s060s***n123456
```
Este es un ejemplo publicado de comando de control de reporte. Mantenga la sintaxis exacta según lo provea el fabricante.

- Cambiar a modo GPRS y seleccionar transporte UDP o TCP
```sms
gprs123456,1,1
```
o, si el dispositivo soporta un comando más simple
```sms
gprs123456
```
Estas variantes configuran el dispositivo para usar GPRS para el reporte de datos. Consulte las notas de su firmware para el orden correcto de parámetros si es necesario.

- Verificar ajustes actuales
```sms
check123456
```

- Habilitar estado de sensor de combustible o transmisión mejorada de sensores digitales
```sms
protocol123456 18
```

Al enviar comandos SMS:
- Mantenga la contraseña del dispositivo correcta; 123456 es la contraseña por defecto en los ejemplos públicos y debería cambiarse si es posible.
- Reemplace los marcadores [apn], [apnu] y [apnp] con los valores de su operador.
- Use el dominio d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 como se muestra.

## Notas de configuración

- Las revisiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis de los comandos o los parámetros disponibles; verifique los comandos para su versión de firmware antes de desplegar masivamente.
- Elija UDP o TCP según la estabilidad de la red del operador y el comportamiento observado; ambos son soportados por Plaspy en el puerto 8888.
- La configuración vía SMS es un método público común para este modelo, pero el Bluetooth o el software del fabricante pueden estar disponibles y resultar más convenientes para algunos instaladores.
- La contraseña por defecto 123456 aparece en ejemplos públicos; cambie las credenciales del dispositivo donde sea posible y documente cualquier cambio de contraseña.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo, así que asegúrese de que el servidor y el puerto sean consistentes entre dispositivos para simplificar la gestión.

## Por qué usar Plaspy con esta configuración

Usar el BN-403C con Plaspy ofrece una combinación práctica para organizaciones que necesitan visibilidad continua de vehículos, gestión de alarmas y control remoto. Las opciones de transporte del BN-403C y la batería de respaldo ayudan a mantener los reportes ante condiciones variables de red y energía, mientras que Plaspy centraliza la telemetría entrante para mapeo en vivo, alertas y flujos operativos.

Learn more about Plaspy and how it can manage devices like the BN-403C on the main website https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions verify the official Coban documentation at https://www.coban.net/ as vendor procedures and firmware behavior can change over time.
