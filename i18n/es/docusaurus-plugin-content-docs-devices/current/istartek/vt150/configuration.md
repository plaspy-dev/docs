---
slug: /istartek/vt150/configuration
id: vt150-configuration
sidebar_label: Configuration
title: iStartek - VT150 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador iStartek VT150 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - configuración iStartek VT150
  - configuración VT150 Plaspy
  - configuración rastreador GPS iStartek
  - configuración de servidor VT150
  - configuración de rastreador Plaspy
  - seguimiento de vehículos VT150
  - configuración SMS VT150
  - ajustes APN VT150
  - integración rastreador GPS Plaspy
  - gestión de flotas VT150
---

# iStartek - Configuración del VT150

Esta página describe el contexto de configuración pública para usar el rastreador GPS iStartek VT150 con Plaspy. Se enfoca en los ajustes prácticos del servidor y en comandos de ejemplo que se usan comúnmente para apuntar un VT150 a la plataforma Plaspy y validar la conectividad. Utilice esta guía junto con el manual del dispositivo y las herramientas del proveedor para una instalación completa.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para el VT150 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el VT150 admite la configuración vía SMS como un método habitualmente disponible y los comandos que aparecen a continuación reflejan los comandos públicos por SMS usados con este modelo.

## Resumen de la configuración

Configurar un VT150 para Plaspy prepara el dispositivo para enviar posición y telemetría al endpoint compartido del servidor de Plaspy, de modo que los dispositivos aparezcan en la plataforma para monitoreo y gestión de eventos. El proceso normalmente establece el APN de la red, el endpoint y puerto del servidor, los intervalos de reporte y cualquier opción como zona horaria o valores por defecto de fábrica.

- Configure el APN del dispositivo para que pueda usar datos GPRS y alcanzar Plaspy.
- Establezca el endpoint y puerto del servidor Plaspy para que el dispositivo informe a la plataforma correcta.
- Seleccione el protocolo de transporte (UDP o TCP) si el VT150 requiere una selección explícita.
- Defina intervalos de reporte y habilite las alertas necesarias para que Plaspy reciba actualizaciones oportunas.
- Valide la configuración y confirme que el dispositivo es visible y está reportando en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — Plaspy usa el mismo puerto para todos los dispositivos soportados  
- Transport support for UDP or TCP — el VT150 puede configurarse para usar cualquiera de los dos transportes en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador por lo que los dispositivos se ingresan sin necesidad de selección manual de protocolo en la plataforma

## Requisitos previos

- Un dispositivo VT150 con alimentación y accesible para configuración.
- Una tarjeta SIM válida activada con plan de datos y capacidad de SMS instalada en el dispositivo.
- Conocimiento del APN del operador y, opcionalmente, del usuario y contraseña del APN (se muestran marcadores de posición abajo).
- Acceso al método de configuración por SMS del fabricante o al software documentado para el VT150.
- Una cuenta en Plaspy y acceso a la plataforma para confirmar que el dispositivo reporta y aparece en su flota.
- Herramientas básicas para enviar mensajes SMS al dispositivo desde un teléfono o un sistema de gestión si utiliza configuración por SMS.

## Cómo se conecta este rastreador a Plaspy

El VT150 envía actualizaciones periódicas de posición y telemetría a Plaspy a través de la red GSM 2G usando datos GPRS. Una vez configurado para apuntar al endpoint y puerto de Plaspy, el rastreador transmite su ubicación y alarmas al servidor compartido de Plaspy, donde la plataforma muestra y procesa los eventos entrantes.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- El transporte puede establecerse en UDP o TCP según la preferencia del instalador y el soporte del dispositivo.
- Los intervalos de reporte (por ejemplo cada 60 segundos) controlan la frecuencia con que se envían actualizaciones de ubicación a Plaspy.
- Los mensajes de alarma y eventos se entregan al mismo servidor Plaspy y aparecen en la plataforma para alertas y análisis.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que no es necesario seleccionar el protocolo en la plataforma.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software para el VT150 (los comandos SMS son un método público común).  
2. Ingrese la dirección del servidor Plaspy configurando d.plaspy.com o la IP 54.85.159.138 como servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888 (todos los dispositivos en Plaspy usan este mismo puerto).  
4. Elija UDP o TCP como transporte si el VT150 requiere una selección explícita del transporte.  
5. Configure el APN del operador usando los marcadores de posición del APN si es necesario y ajuste la zona horaria o los parámetros de intervalo de reporte.  
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio.  
7. Valide que el VT150 reporte a Plaspy verificando el dispositivo en su cuenta de Plaspy y confirmando la recepción de posiciones o datos de eventos.

## Comandos de configuración de ejemplo

El VT150 admite configuración por SMS. A continuación se muestran comandos SMS públicos de ejemplo en el orden que comúnmente se aplican. Envíe cada línea como un SMS separado al número del dispositivo.

- Restablecimiento opcional a configuración de fábrica (usar solo si es necesario):
```
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```
GMT,E,0#
```

- Configurar el APN del operador (reemplace [apn] por el APN de su operador; incluya [apnu] y [apnp] solo si su operador los requiere):
```
APN,[apn]# 
```
O con usuario y contraseña opcionales:
```
APN,[apn],[apnu],[apnp]#
```

- Establecer el servidor GPRS al dominio de Plaspy (la selección UDP o TCP se realiza en el dispositivo si es necesario):
```
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente establecer el servidor GPRS a la IP del servidor Plaspy:
```
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización a cada 60 segundos:
```
TIMER,60#
```

- Verificar los parámetros actuales:
```
PARAM#
```

Notas sobre los marcadores de posición
- [apn] es la cadena APN del operador móvil necesaria para GPRS.
- [apnu] y [apnp] son marcadores de posición opcionales para usuario y contraseña del APN usados por algunos operadores.
- Envíe cada comando como un SMS al número del dispositivo y espere las respuestas de confirmación por SMS si el dispositivo está configurado para responder.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los comandos disponibles o la sintaxis; siempre consulte el manual del dispositivo para la revisión de firmware de su VT150.
- El VT150 soporta la configuración vía SMS como se muestra, pero el fabricante puede ofrecer también herramientas de software o métodos USB/serial.
- TCP frente a UDP se selecciona a nivel de dispositivo cuando está soportado; Plaspy acepta ambos en el mismo puerto y realiza la detección automática del protocolo.
- Todos los dispositivos en Plaspy usan el puerto 8888, por lo que debe asegurarse de que los firewalls y la configuración de red permitan tráfico saliente TCP o UDP al puerto 8888 en el servidor Plaspy indicado.
- Después de cambiar el servidor o los ajustes del APN, espere un breve periodo para que el dispositivo se registre en la red y comience a enviar datos.

## Por qué usar Plaspy con esta configuración

Usar el VT150 con Plaspy brinda a los operadores de flotas visibilidad confiable de la ubicación de los vehículos, alarmas y telemetría con un flujo de configuración sencillo. Apuntar el VT150 al endpoint y puerto compartidos de Plaspy y confirmar el APN y los intervalos de reporte garantiza que el dispositivo se comunique de forma consistente con la plataforma para monitoreo en tiempo real y revisiones históricas.

Para obtener más información sobre Plaspy y cómo soporta dispositivos como el VT150 visite https://www.plaspy.com. Para obtener las instrucciones específicas del dispositivo, notas de firmware y documentos técnicos más recientes, verifique la información en el sitio del fabricante https://istartek.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
