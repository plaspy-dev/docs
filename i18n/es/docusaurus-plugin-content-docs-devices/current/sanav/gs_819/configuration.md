---
slug: /sanav/gs_819/configuration
id: gs_819-configuration
sidebar_label: Configuration
title: Sanav - GS-819 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Sanav GS-819 con Plaspy, ajustes de servidor y pasos prácticos para integrar el tracker
keywords:
  - Configuración Sanav GS 819
  - Instalación Sanav GS 819
  - GS 819 Plaspy
  - Configuración tracker Plaspy
  - Configuración servidor GPS
  - Guía instalación rastreador vehicular
  - Comandos SMS GS 819
  - Configuración seguimiento de flotas
  - Guía integración GS 819
  - Configuración rastreador Sanav
---

# Sanav - Configuración GS-819

Esta página documenta el contexto público de configuración para usar el Sanav GS-819 con Plaspy. Reúne los pasos prácticos y ejemplos de comandos SMS publicados que se emplean para preparar el GS-819, de modo que pueda reportar ubicación y estado a la plataforma Plaspy. Use esta guía para comprender qué valores espera Plaspy y cómo puede configurarse el dispositivo mediante los métodos soportados por el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del tracker; no obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GS-819 soporta configuración por GPRS, 3G y SMS; los ejemplos siguientes se basan en comandos SMS públicos y en prácticas habituales durante el aprovisionamiento inicial del dispositivo.

## Resumen de la configuración

Este proceso prepara al GS-819 para comunicarse de forma fiable con Plaspy configurando el APN del operador, el endpoint del servidor de la plataforma, la ruta de datos y el intervalo de reporte. El objetivo es permitir que el equipo envíe actualizaciones de posición y mensajes de estado a Plaspy para que la unidad sea visible y manejable desde la plataforma.

- Configure el APN y las credenciales del operador para que el tracker pueda establecer sesión GPRS.
- Establezca el endpoint del servidor de Plaspy para que la telemetría llegue a la plataforma.
- Seleccione el transporte y la ruta de datos adecuados para el envío de la información.
- Defina un intervalo de reporte apropiado para que Plaspy reciba actualizaciones oportunas.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de comenzar

- Un GS-819 cargado e instalado, con antenas y alimentación conectadas según las instrucciones del fabricante.
- Una tarjeta SIM con datos y capacidad de SMS activos y las credenciales APN correctas del operador móvil.
- Acceso al método de configuración soportado por el fabricante, como comandos SMS, COTA o software de PC.
- Conocimiento de la contraseña del dispositivo si es requerida para la configuración; los ejemplos públicos usan la contraseña por defecto 0000.
- Un equipo o teléfono capaz de enviar SMS al dispositivo si se usa el método de configuración por SMS.

## Cómo se conecta este tracker a Plaspy

El GS-819 puede reportar posición y eventos del dispositivo a Plaspy mediante canales de datos GPRS o 3G. Al configurarlo para usar el endpoint del servidor Plaspy, la unidad establece la conexión y transmite la telemetría al servidor compartido de Plaspy en el puerto indicado para su procesamiento y visualización en la plataforma.

- El dispositivo se configura para enviar datos a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el firmware y la configuración; Plaspy aceptará cualquiera de los dos.
- Plaspy emplea el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del tracker.
- Actualizaciones regulares de posición hacen que la unidad sea visible en Plaspy para seguimiento y monitoreo operativo.
- Mensajes de estado e informes de eventos se reenvían a la plataforma para que los usuarios puedan actuar ante alertas y cambios.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software provisto por Sanav (comandos SMS, COTA o herramienta de PC).
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la dirección IP 54.85.159.138 como destino del servidor.
3. Configure el puerto en 8888 en la configuración del equipo.
4. Elija UDP o TCP si el dispositivo exige una selección explícita del transporte.
5. Ingrese el APN del operador y las credenciales para que el tracker pueda establecer la conexión de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o las instrucciones lo requieren.
7. Verifique que el dispositivo reporte a Plaspy comprobando la conectividad y la visibilidad en la plataforma.

## Ejemplos de comandos de configuración

El GS-819 puede configurarse mediante comandos SMS. A continuación están los comandos de ejemplo públicos y el orden recomendado según la documentación del dispositivo. La contraseña usada en estos comandos es la por defecto 0000 en los ejemplos públicos. Reemplace los marcadores por los valores reales antes de enviar.

- Restauración de fábrica (paso opcional inicial)
```text
#username,0000,9*
```

- Configurar el APN del operador y credenciales
```text
#username,0000,3,{{apn}},{{apnu}},{{apnp}}*
```
Explicación: {{apn}} es el APN del operador, {{apnu}} es el nombre de usuario del APN si se requiere, y {{apnp}} es la contraseña del APN si se requiere. Deje el usuario o la contraseña vacíos en el comando si el operador no los solicita.

- Establecer el servidor GPRS hacia Plaspy usando la IP pública y el puerto
```text
#username,0000,18,54.85.159.138:8888*
```
Explicación: Este comando apunta el GS-819 al endpoint y puerto del servidor Plaspy. Como alternativa, use el dominio d.plaspy.com si el firmware del dispositivo acepta nombres de host.

- Configurar la ruta de transmisión de datos
```text
#username,0000,14,9*
```
Explicación: Este comando configura la ruta de datos que empleará el tracker. Mantenga el orden mostrado arriba al realizar la configuración inicial.

- Establecer intervalo de actualización a 60 segundos
```text
#username,0000,6,60,9999*
```
Explicación: Este comando configura los intervalos de reporte automático. Ajuste los valores numéricos según las necesidades operativas y las restricciones del fabricante.

Nota: Mantenga los marcadores de usuario y contraseña tal como aparecen y sustitúyalos por los valores reales configurados en su dispositivo. La contraseña por defecto mostrada en ejemplos públicos es 0000.

## Notas de configuración

- La configuración por SMS es habitual y se utiliza frecuentemente para el aprovisionamiento inicial; el software de PC y COTA pueden ofrecer opciones más cómodas para configuraciones masivas o remotas.
- Las revisiones de firmware y las variantes de hardware pueden cambiar el conjunto exacto de comandos SMS o el orden de parámetros; verifique los comandos contra el manual del dispositivo antes de desplegar a gran escala.
- Plaspy acepta tanto UDP como TCP en el puerto compartido 8888; elija el transporte que sea compatible con el firmware del dispositivo y con el comportamiento de la red del operador.
- Cambie siempre las contraseñas por defecto después del aprovisionamiento en entornos donde la seguridad y el control de acceso sean importantes.
- Si se utiliza un nombre de host en lugar de una IP, confirme que el firmware del dispositivo soporta resolución DNS para el nombre de servidor configurado.

## Por qué usar Plaspy con esta configuración

Usar el Sanav GS-819 con Plaspy ofrece un camino directo hacia la visibilidad de la flota y el monitoreo operativo. El soporte del GS-819 para GPRS, 3G y métodos de configuración por SMS, junto con sus funciones de reporte programable, lo hacen adecuado para enviar actualizaciones de ubicación y estado a Plaspy para seguimiento, alertas y análisis histórico.

Para conocer más sobre cómo Plaspy puede gestionar dispositivos como el GS-819, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre la configuración específica del equipo, notas de firmware y documentación del fabricante, verifique la información en el sitio oficial de Sanav http://es.sanav.com/ ya que los procedimientos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
