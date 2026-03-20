---
slug: /topfly/cyberlabelx_100/configuration
id: cyberlabelx_100-configuration
sidebar_label: Configuration
title: TopFly - CyberLabelX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar TopFly CyberLabelX 100 en Plaspy con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración TopFly CyberLabelX 100
  - Configuración CyberLabelX 100
  - CyberLabelX 100 Plaspy
  - Configuración servidor CyberLabelX 100
  - Rastreador GPS CyberLabelX 100
  - Configuración rastreador de paquetes
  - Configuración rastreador de activos
  - Ajustes servidor Plaspy
  - Comandos de configuración SMS
  - Integración rastreador GPS
---

# TopFly - Configuración CyberLabelX 100

Esta página documenta el contexto público de configuración para usar el TopFly CyberLabelX 100 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y comandos de ejemplo que se emplean comúnmente para preparar el dispositivo y que informe a Plaspy, facilitando la visibilidad en el rastreo de paquetes y envíos de alto valor usando este compacto rastreador de activos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el CyberLabelX 100 admite SMS y métodos estándar de configuración por red y los comandos SMS de ejemplo a continuación reflejan patrones públicos comunes.

## Resumen de la configuración

El proceso de configuración prepara el CyberLabelX 100 para transmitir posiciones GNSS, telemetría de sensores y eventos de alarma a Plaspy. Se asegura de que el dispositivo tenga las credenciales de red correctas, apunte al servidor de Plaspy y use un intervalo de reporte apropiado para que la plataforma reciba datos oportunos.

- Configure parámetros de red del dispositivo como APN y servidor GPRS para que el tracker pueda acceder a datos móviles y reportar a Plaspy.
- Ajuste el intervalo de reporte y la zona horaria para que los puntos de ubicación se envíen con la frecuencia deseada.
- Configure el tracker para que apunte al endpoint del servidor de Plaspy y así los datos lleguen a su cuenta.
- Valide la conectividad y confirme que los registros en búfer se carguen correctamente cuando vuelva la cobertura.
- Use el canal de configuración soportado por el fabricante, como SMS o la herramienta oficial de configuración, para aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para usar cualquiera de los dos)  
- Plaspy detecta automáticamente el protocolo del tracker y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de la configuración

- Un CyberLabelX 100 cargado con una Nano SIM activa y un plan de datos móviles habilitado para GPRS.  
- Capacidad para enviar SMS al dispositivo para configuración por SMS, o acceso al software de configuración TopFly por USB si lo prefiere.  
- Contraseña por defecto del dispositivo 0000 para configuración por SMS según ejemplos públicos (confirme en la documentación de su dispositivo).  
- Ajustes APN correctos y cualquier nombre de usuario o contraseña de APN requeridos por su operador móvil.  
- Verificación básica de fijación GNSS en ubicación o tiempo suficiente para que el dispositivo adquiera señales satelitales antes de las pruebas.  
- Acceso a la cuenta o plataforma Plaspy para confirmar que el dispositivo está reportando después de la configuración.

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el CyberLabelX 100 envía paquetes de ubicación y telemetría al endpoint y puerto compartido del servidor Plaspy para que el dispositivo sea visible en la plataforma Plaspy para monitoreo en tiempo real y reproducción histórica.

- El dispositivo reporta posiciones GNSS y telemetría ambiental a d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- El transporte puede configurarse como UDP o TCP; Plaspy soporta ambos y detecta automáticamente el protocolo usado.  
- El registro en búfer permite que los puntos almacenados se suban cuando vuelve la cobertura, preservando la continuidad de los envíos.  
- Los eventos de alarma y sensor como manipulación, movimiento y alertas de temperatura se entregan a Plaspy para notificación inmediata.  
- Intervalos de actualización regulares aseguran visibilidad consistente según el valor TIMER configurado.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de TopFly para su CyberLabelX 100, por ejemplo comandos SMS o la herramienta de configuración del fabricante.  
2. Introduzca la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor.  
3. Establezca el puerto del servidor en 8888 que es el puerto que usa Plaspy para todos los dispositivos.  
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere una selección explícita.  
5. Configure el APN y las credenciales de red requeridas por su operador móvil.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento lo requiere.  
7. Valide que el dispositivo reporte a Plaspy y que la ubicación y la telemetría de sensores aparezcan en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El CyberLabelX 100 puede configurarse enviando mensajes SMS. Los comandos de ejemplo públicos abajo usan la contraseña por defecto 0000. Conserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores de su operador al enviar los comandos.

- Ajustar la zona horaria a UTC 0
```text
GMT,0000,0#
```

- Configurar el APN del operador (reemplazar los marcadores por su APN, usuario y contraseña)
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} es el nombre de APN proporcionado por su operador móvil. {{apnu}} es el nombre de usuario del APN si se requiere. {{apnp}} es la contraseña del APN si se requiere.

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
IP,0000,54.85.159.138 8888#
```
Nota: Alternativamente puede usar el dominio d.plaspy.com si el dispositivo acepta nombres de dominio en lugar de una dirección IP.

- Establecer el intervalo de reporte a 60 segundos ejemplo
```text
TIMER,0000,60:60:0:0#
```
Explicación: Este ejemplo ajusta los timers de subida y de movimiento del dispositivo a un intervalo de reporte de 60 segundos. Adapte según sus necesidades operativas.

Estos comandos son ejemplos públicos. El orden suele importar: configure primero el APN, luego el servidor, luego los timers y reinicie si es necesario.

## Notas de configuración

- Diferencias en firmware y herramientas pueden cambiar la sintaxis exacta de los SMS o los parámetros requeridos; consulte siempre las notas de firmware del dispositivo.  
- Si el dispositivo soporta nombres de dominio y direcciones IP, usar d.plaspy.com puede ser más sencillo de mantener a largo plazo, mientras que la IP 54.85.159.138 se ofrece como un endpoint directo.  
- Elija TCP o UDP según la fiabilidad de la red y sus preferencias operativas; Plaspy soporta ambos y detectará el protocolo automáticamente.  
- La configuración por SMS es útil cuando el dispositivo no tiene conexión de datos, mientras que la configuración por GPRS requiere un APN funcional y conectividad de datos.  
- La contraseña por defecto para SMS mostrada en ejemplos públicos es 0000; confirme y cambie credenciales por defecto cuando sea posible por seguridad operativa.

## Por qué usar Plaspy con esta configuración

Configurar el CyberLabelX 100 para que reporte a Plaspy ofrece a gerentes de logística y de activos visibilidad de ubicación en tiempo real, alertas de eventos y reproducción histórica dentro de una única plataforma. El registro en búfer del dispositivo y los intervalos de reporte configurables lo hacen apropiado para el rastreo a nivel de paquete cuando la continuidad y el montaje discreto son importantes.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, comportamiento de firmware e instrucciones del fabricante verifique la documentación oficial de TopFly en https://www.topflytech.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
