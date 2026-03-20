---
slug: /enfora/gsm_5108/configuration
id: gsm_5108-configuration
sidebar_label: Configuration
title: Enfora - GSM 5108 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Enfora GSM 5108 setup with Plaspy server and example AT commands for device reporting
keywords:
  - Enfora GSM 5108 configuration
  - Enfora GSM 5108 setup
  - GSM 5108 server configuration
  - Enfora tracker Plaspy
  - GSM tracker configuration
  - Enfora GPS setup
  - GSM 5108 AT commands
  - vehicle tracking configuration
  - GPS tracker Plaspy integration
  - Enfora GSM setup guide
---

# Enfora - GSM 5108 Configuration

This page covers the public configuration context for using the Enfora GSM 5108 with Plaspy. It gathers the practical server values and example AT command sequences commonly used to point the GSM 5108 to a remote tracking server. Use this guide to understand how to prepare the device for Plaspy reporting and to reference example commands when applying manufacturer configuration steps.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps for the GSM 5108 can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The commands and settings shown here reflect public configuration patterns and should be applied alongside official Enfora documentation.

## Configuration Overview

Configuring the Enfora GSM 5108 for Plaspy is about directing the device to the Plaspy server endpoint, ensuring the device can connect over the cellular network, and enabling the events and reporting intervals your operation requires. The sample AT commands provided below show a common sequence used to set APN, server address, transport, and several event rules on devices that accept AT style configuration.

- Point the device to the Plaspy server domain or IP so telemetry is routed to Plaspy
- Configure the transport and port to match Plaspy requirements and network conditions
- Enable periodic time reports and event driven reports for visibility in Plaspy
- Save settings to device nonvolatile memory and restart if required
- Validate the device reaches d.plaspy.com or 54.85.159.138 on port 8888 and appears in Plaspy

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port 8888 for all supported devices and its platform automatically determines the incoming protocol.

## Typical Requirements Before Setup

- Active SIM with a data plan and correct APN settings for the installed mobile operator
- Power to the GSM 5108 and access to its configuration interface or vendor configuration tool
- Access to the device console or SMS command channel if the device supports AT or SMS based configuration
- Knowledge of the APN, and optional APN username and password to populate placeholders such as {{apn}}, {{apnu}}, and {{apnp}}
- A plan for event reporting and reporting intervals to match monitoring needs
- Access to official Enfora documentation or support channels for firmware specific variations

## How This Tracker Connects to Plaspy

The Enfora GSM 5108 is configured to send location and event messages over the cellular network to the Plaspy server endpoint. Plaspy receives messages on a single shared port and detects the device protocol automatically so the device simply needs to be pointed at the correct host and port.

- The tracker is directed to d.plaspy.com or 54.85.159.138 as the destination host
- The device sends telemetry to port 8888 using UDP or TCP as configured
- Periodic time reports and event-driven reports are used to update location and status in Plaspy
- Event rules on the device trigger immediate reporting for inputs, power events, or antenna state
- Successful connectivity makes the device visible and reportable inside Plaspy for monitoring and reporting

## Common Configuration Workflow

1. Access the official Enfora configuration method or software for the GSM 5108 (serial console, vendor tool, or SMS command channel).
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device destination.
3. Set the port to 8888 in the device server or API settings.
4. Choose UDP or TCP if the device requires a transport selection; Plaspy accepts both and detects protocol automatically.
5. Apply or save the configuration to the device nonvolatile memory (for example with AT&W where supported).
6. Restart or reset the device if required to activate the new server settings.
7. Validate that the device reports to Plaspy by checking connectivity and that the device data appears in your Plaspy account.

## Example Configuration Commands

The GSM 5108 accepts AT style commands for many configuration steps. Below are example public commands in a logical order based on commonly published sequences. Preserve and replace placeholders where needed.

Initial reset and defaults and APN configuration
- Reset to factory or ensure a clean state
```text
AT&F
```

- Ensure user settings saved
```text
AT&W
```

- Set PDP context with operator APN
```text
AT+CGDCONT=1,"IP","{{apn}}"
```
If the APN requires username or password, the following placeholder command may be used where supported:
```text
AT%CGPCO=1,"{{apnu}},{{apnp}}",0
```
(Explanation: {{apn}} is the APN string for your mobile operator. {{apnu}} and {{apnp}} are optional APN username and password.)

Plaspy server and transport settings
- Register a friend or target server IP for some firmware families
```text
AT$FRIEND=1,1,"54.85.159.138"
```

- Set UDP API port to Plaspy port
```text
AT$UDPAPI=,8888
```

- Enable wakeup or keepalive mode if supported
```text
AT$WAKEUP=1,1
```

Event and reporting configuration examples
- Time based reporting interval and event enable
```text
' Time report
AT$EVTIM4=60
AT$EVENT=9,1,12,1,1
AT$EVENT=9,3,40,2,28905678
AT$EVENT=9,3,60,2,28905678
```

- Reporting by input 1
```text
' reporting by input 1
AT$EVENT=10,0,0,1,1
AT$EVENT=10,3,40,1,28905678
AT$EVENT=10,3,60,1,28905678
```

- Reporting by input 2
```text
' reporting by input 2
AT$EVENT=12,0,1,1,1
AT$EVENT=12,3,40,4,28905678
AT$EVENT=12,3,60,4,28905678
```

- Power and antenna related events
```text
' Battery Disconnect
AT$EVENT=14,0,3,0,0
AT$EVENT=14,3,40,6,28905678
AT$EVENT=14,3,60,6,28905678

' GPS antenna disconnection
AT$EVENT=15,0,71,2,3
AT$EVENT=15,3,40,7,28905678

' GPS antenna connection
AT$EVENT=16,0,71,1,1
AT$EVENT=16,3,40,16,28905678

' Battery Connection
AT$EVENT=17,0,3,1,1
AT$EVENT=17,3,40,17,28905678
AT$EVENT=17,3,60,22,28905678
```

- Ignition events
```text
' Ignition ON
AT$EVENT=37,0,7,1,1
AT$EVENT=37,3,40,2,28905678

' Ignition OFF
AT$EVENT=38,0,7,0,0
AT$EVENT=38,3,40,3,28905678
```

Finalization
```text
AT$AREG=2
AT&W
```

Optional restart
```text
AT$RESET
```
Note: The AT$RESET command is typically used to restart the device so saved settings take effect. Use it as part of final setup if required by your firmware.

## Configuration Notes

- AT command support and exact parameter syntax may vary by firmware revision; confirm the correct commands for your device firmware.
- Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator values as required. If no username or password is needed, omit or leave the placeholders blank per device syntax.
- Choose UDP or TCP based on network reliability and device support; Plaspy accepts both on port 8888 and will detect protocol automatically.
- The example commands show common event rules patterns. Adjust event IDs and parameters to match your installation and reporting policy.
- Manufacturer tools, SMS commands, or serial configuration interfaces may be available; use the official Enfora configuration method that matches your installation.

## Why Use Plaspy with This Configuration

Using Plaspy with an Enfora GSM 5108 provides a straightforward path to centralize location and event reporting for fleet, asset, or operational monitoring. By directing the device to the Plaspy server endpoint and port, you can take advantage of Plaspy's protocol detection and unified port handling to simplify onboarding and reduce per-device configuration complexity.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific details, firmware notes, and vendor tools review the official Enfora documentation at http://www.enfora.com/ since manufacturer setup methods and firmware behavior can change over time.
