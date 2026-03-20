---
slug: /totemtech/at05/configuration
id: at05-configuration
sidebar_label: Configuration
title: Totemtech - AT05 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Totemtech AT05 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Totemtech AT05 configuration
  - Totemtech AT05 setup
  - Totemtech AT05 Plaspy
  - GPS tracker configuration
  - tracker server settings
  - GPRS tracker setup
  - SMS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - Totemtech tracker guide
---

# Totemtech - AT05 Configuration

This page covers the public configuration context for using the Totemtech AT05 tracker with Plaspy. It explains the shared server settings that Plaspy requires, how those values are applied to the device, and the available SMS-based commands provided in the public Totemtech configuration content. Use this guide to prepare the AT05 for communication with Plaspy and to understand the practical steps involved in getting the device visible on the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The AT05 supports SMS and GPRS command methods in public documentation, and the commands shown here reflect the manufacturer-provided SMS command format and placeholders where applicable.

## Configuration Overview

This configuration process prepares the AT05 to send location and event data to the Plaspy cloud endpoint so the device becomes visible and reportable in the Plaspy platform. The public setup approach for the AT05 commonly uses SMS commands to set APN, server, and reporting parameters, and Plaspy uses a single shared port and automatic protocol detection so you do not need to match protocol settings in the platform.

- Configure the device APN and GPRS parameters so the tracker can connect to the mobile network.
- Point the tracker to the Plaspy server endpoint so data flows to the platform.
- Set update intervals and acknowledgement behavior to control reporting cadence.
- Validate connectivity and confirm the device appears in Plaspy after applying settings.
- Use the manufacturer-provided SMS commands as shown here for direct device configuration when applicable.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the AT05 may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform will accept the supported protocol from the device

Note: All devices in Plaspy use the same port, and the platform will detect the protocol used by the tracker automatically.

## Typical Requirements Before Setup

- A powered and accessible AT05 unit with the ability to receive SMS commands or be configured via the manufacturer tool.
- A valid SIM card with mobile data enabled and correct APN settings for the mobile operator.
- Access to the Totemtech SMS command format or configuration utility as provided by the vendor.
- Knowledge of the device password (the public sample commands use the default password 000000).
- A brief window of time to confirm the device reports to Plaspy after configuration.

## How This Tracker Connects to Plaspy

The AT05 transmits location and event data over the mobile network to the Plaspy server endpoint and port, allowing Plaspy to display real-time and history traces and to report alarms and status. When configured to point at Plaspy, the device will establish a data session to the shared server endpoint and send periodic reports according to the configured interval.

- The tracker uses GPRS to open a data connection to the Plaspy server endpoint.
- The device can be configured to send to a primary Plaspy endpoint (and may support a secondary server concurrently per device capabilities).
- Location updates and event reports are sent to d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- The tracker can use UDP or TCP to deliver packets; Plaspy performs protocol detection automatically.
- Plaspy receives the device messages and makes the tracker visible in the platform when reports are received.

## Common Configuration Workflow

1. Access the official Totemtech configuration method or SMS command process provided by the manufacturer.
2. Enter the Plaspy server address by specifying d.plaspy.com or the server IP 54.85.159.138 in the device settings.
3. Set the device port to 8888, which is used by all devices in Plaspy.
4. Choose UDP or TCP on the device if the tracker requires an explicit transport selection.
5. Apply or save the configuration using the manufacturer's tool or by sending the appropriate SMS commands.
6. Restart the device if required by the vendor instructions or after applying critical network settings.
7. Validate that the device reports to Plaspy by confirming updates appear in the platform after a few reporting intervals.

## Example Configuration Commands

The AT05 public configuration can be performed by SMS using the manufacturer command format. The sample commands below use the default device password 000000 as shown in the public Totemtech content. Keep placeholders such as [apn], [apnu], and [apnp] and replace them with your operator values when sending commands.

1. Optional factory reset (use only when you need to restore factory defaults)
```text
*000000,007#
```
2. Set the operator APN (replace placeholders with your mobile operator values)
```text
*000000,002,[apn],[apnu],[apnp]#
```
- [apn] = your mobile network APN name
- [apnu] = APN username (leave empty if not required)
- [apnp] = APN password (leave empty if not required)

3. Set the GPRS server to Plaspy using server IP and port and enable as primary (the last value typically indicates server index or enable flag)
```text
*000000,003,54.85.159.138,8888,1
```
This points the device at the Plaspy server IP on port 8888. You may also use d.plaspy.com in place of the IP where the device supports domain names.

4. Set ACK (acknowledgement) behavior
```text
*000000,019,1#
```

5. Set the position update interval to 60 seconds (example reporting cadence)
```text
*000000,60,60,0,60#
```

Follow the device message format exactly and verify responses from the tracker after each SMS when possible. If your tool accepts domain names, you can use d.plaspy.com instead of the numeric IP address.

## Configuration Notes

- Commands above are based on public Totemtech SMS format; firmware revisions and regional models can vary the exact parameters and available commands.
- The AT05 supports GPRS and SMS command methods in public documentation; choose the method that matches your installation and operator capabilities.
- Where the device accepts a transport choice, TCP or UDP can be selected; Plaspy will detect and accept either protocol on port 8888.
- The sample commands use the default password 000000 as published; change device passwords according to your security policy after initial setup if the device supports it.
- Totemtech devices may allow two server entries; you can configure a secondary server in addition to Plaspy if required by your operations.

## Why Use Plaspy with This Configuration

Using Plaspy with the Totemtech AT05 gives an organization a straightforward path to bring device data into a centralized fleet or asset tracking platform. The AT05's ability to send data to a configured server combined with Plaspy's shared server endpoint and automatic protocol detection simplifies onboarding and reduces the number of platform-side settings you must manage.

If you want to learn more about Plaspy and how the platform handles device reporting, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and command references, verify details on the Totemtech website at http://www.totemtek.com/ as manufacturer specifications and firmware changes can affect exact steps.
