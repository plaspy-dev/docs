---
slug: /oigo_telematics/ar_2cx/configuration
id: ar_2cx-configuration
sidebar_label: Configuration
title: Oigo Telematics - AR-2CX Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Oigo Telematics AR-2CX with Plaspy server settings and example AT commands for platform integration
keywords:
  - Oigo Telematics AR-2CX configuration
  - AR-2CX setup Plaspy
  - AR-2CX server configuration
  - Oigo AR-2CX GPS tracker setup
  - AR Series configuration guide
  - Plaspy tracker configuration
  - Vehicle tracker AR-2CX setup
  - Fleet tracking AR-2CX configuration
  - AR-2CX AT command guide
  - Oigo Telematics AR-2CX integration
---

# Oigo Telematics - AR-2CX Configuration

This page documents the public configuration context for using the Oigo Telematics AR-2CX with Plaspy. It collects the shared Plaspy server settings and a representative set of publicly available AT commands that are commonly used to point AR series devices to a remote server. Use this guide to understand the required server information and the practical steps typically needed to get the AR-2CX reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The AR-2CX supports event reporting and discreet vehicle installation as described by Oigo Telematics; where available, this page includes example AT commands from public configuration content to illustrate the process of configuring the tracker to communicate with Plaspy.

## Configuration Overview

The goal of AR-2CX configuration for Plaspy is to prepare the device to establish a reliable data link to the platform, ensure the tracker reports the required events, and confirm visibility in the Plaspy interface. The example AT commands included below show how the device can be set to use Plaspy as its reporting endpoint and tune common reporting parameters.

- Point the device to the Plaspy server endpoint and port so data is routed to your account.
- Configure the device APN and connectivity parameters required for cellular data reporting.
- Adjust reporting intervals and event thresholds to match operational needs and data usage.
- Validate connectivity and confirm the device appears in Plaspy once configuration is applied.
- Optionally apply device power and sleep settings to align battery and vehicle installation requirements.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible AR-2CX unit with the installer or technician able to run configuration commands or manufacturer software.
- An active cellular data SIM and correct APN settings for the device network if using mobile data; the example commands include an APN placeholder.
- Access to Oigo Telematics official configuration methods such as the vendor console, USB or serial interface, or SMS/AT command tools where supported.
- A Plaspy account and basic device registration information so you can verify the tracker appears in the platform after configuration.
- Stable network coverage and a test environment to validate that the device is reporting to the Plaspy endpoint.

## How This Tracker Connects to Plaspy

The AR-2CX is configured to send location and event data to the shared Plaspy server endpoint and port so Plaspy can receive telemetry and make the device visible in the platform. Plaspy's automatic protocol detection helps accept data from the tracker without requiring the user to manually select a protocol in most cases.

- The device points to d.plaspy.com or directly to 54.85.159.138 as the server endpoint.
- Data is sent over port 8888 which is the single port Plaspy uses for all supported devices.
- Transport can be UDP or TCP depending on device support and installer preference.
- Plaspy automatically identifies the tracker protocol and processes incoming reports.
- Once connected, the tracker will report events and positional updates to Plaspy for monitoring and alerts.

## Common Configuration Workflow

1. Access the official Oigo Telematics configuration method or software for the AR-2CX (for example an AT command console, SMS setup, or vendor tool).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138 as the device server.
3. Set the device port to 8888 which is the shared port Plaspy uses for all devices.
4. Choose UDP or TCP transport if the device firmware requires an explicit transport selection.
5. Configure the device APN and connectivity parameters if using cellular data, and apply or save the configuration.
6. Restart or power cycle the device if required by the device or firmware to apply new settings.
7. Validate that the tracker reports to Plaspy by checking device visibility and recent reports in your Plaspy account.

## Example Configuration Commands

The following sample AT commands are taken from publicly available AR series configuration content and shown in the original order where order can be important. These commands illustrate how an AR-2CX can be pointed to Plaspy and tuned for reporting. Keep placeholders such as [apn] as shown and replace them with your network APN when you configure the device.

- Full example command set

```text
AT+XRFD
AT+XAPN=1"[apn]"
AT+XIP="54.85.159.138",8888
AT+XBUB=1
AT+XBUBE=3,30
AT+XCSW=600
AT+XDDI=1000
AT+XDHC=170,3
AT+XDMES=7,90
AT+XDMSD=50
AT+XDMSS=7,10
AT+XDMT=1
AT+XDRI=3600,300
AT+XDTS=0
AT+XDTT=0
AT+XGPL=3,60
AT+XGPLP=4,10
AT+XGPLT=300
AT+XHB=0
AT+XHBB=600
AT+XIA=1,300
AT+XIGM=2,5
AT+XIGN=3
AT+XIOD=A,1
AT+XIOD=B,0
AT+XIOD=C,1
AT+XIOD=D,0
AT+XIOE=A,0
AT+XIOE=B,0
AT+XIOE=C,2
AT+XIOE=D,0
AT+XIPC=1
AT+XKA=2,60
AT+XPRP=2
AT+XPST=1,900
AT+XPUP=1
AT+XPWL=11.7,30
AT+XPWLE=3
AT+XPWM=0,0,1,1
AT+XPWS=12.3,3600
AT+XPWSE=3
AT+XRLYE=3
AT+XRPA=0
AT+XRPF=1,1
AT+XRPM=0000FFFF
AT+XRPQ=3000
AT+XRPSF=126
AT+XRSTE=1
AT+XRSTP=2,14500
AT+XSMSD=""
AT+XSMSS=""
AT+XSPD=3,110,15
AT+XTA=1,30
AT+XVO=0
AT+XVTO=0
AT+XVTOE=5000
AT+XRST=1
AT+XRST=2
```

Notes on the commands above:
- AT+XAPN includes the placeholder [apn]. Replace [apn] with your cellular provider APN string.
- AT+XIP sets the Plaspy server IP and port to 54.85.159.138 and 8888. You can also set the server to d.plaspy.com where the device supports domain names.
- AT+XRST=1 and AT+XRST=2 are reset commands present at the end of the sample. Treat reset commands as optional initial or final restart steps when required by the device or firmware.

## Configuration Notes

- Firmware and hardware revisions can change available AT commands and expected parameters. Always confirm commands against the device firmware version you are using.
- Where the device offers a choice between UDP and TCP, evaluate network reliability and data usage; both transports are supported for Plaspy on port 8888.
- The APN placeholder in example commands must be replaced with a valid network APN string for your SIM and region.
- Manufacturer configuration tools, SMS provisioning, or direct serial/USB consoles may be used depending on the AR-2CX firmware and installer preferences.
- Keep a record of original settings before applying bulk changes, and test connectivity after each significant change.

## Why Use Plaspy with This Configuration

Using the AR-2CX configured to report to Plaspy gives fleet and recovery teams centralized visibility into vehicle events and location data. With the device pointed to Plaspy using the shared server settings and port, organizations can consolidate reporting, take advantage of Plaspy's automatic protocol detection, and manage alerts and monitoring across mixed fleets without per device server variation.

To learn more about Plaspy and how the platform handles device connectivity and fleet visibility visit https://www.plaspy.com. For the most current device specific commands, firmware details, and installation guidance confirm configuration methods and file updates on the manufacturer site https://www.oigotelematics.com/ as device procedures and firmware behavior can change over time.
