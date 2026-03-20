---
slug: /skypatrol/tt_8750/configuration
id: tt_8750-configuration
sidebar_label: Configuration
title: SkyPatrol - TT 8750+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for SkyPatrol TT 8750 plus for use with Plaspy including server settings and example commands
keywords:
  - SkyPatrol TT 8750+ configuration
  - SkyPatrol TT 8750+ setup
  - TT 8750+ server configuration
  - TT 8750+ Plaspy setup
  - Plaspy tracker configuration
  - GPS tracker configuration guide
  - vehicle tracking setup
  - GPS device AT commands
  - tracker reporting rules
  - telemetry server configuration
---

# SkyPatrol - TT 8750+ Configuration

This page documents the public configuration context for using the SkyPatrol TT 8750+ tracker with Plaspy. It brings together the shared Plaspy server settings and the practical device commands and steps that are commonly used to point a TT 8750+ at the Plaspy endpoint. Use this guide to understand what is required before you integrate the device with Plaspy and which manufacturer commands are typically applied.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation type, and vendor tools. The example commands below are taken from public TT 8750+ configuration snippets and should be applied carefully following your installer practice and the official SkyPatrol documentation.

## Configuration Overview

Configuring the TT 8750+ for Plaspy prepares the device to send its location and event messages to the Plaspy endpoint so the tracker becomes visible and manageable in the platform. The process typically sets APN parameters, establishes the server destination, configures reporting rules and timers, and saves the settings on the device.

- Set the device APN and optional APN credentials so the modem can open a data connection.
- Configure the Plaspy server destination using either the domain or the public IP and the shared Plaspy port.
- Define reporting timers and event rules so the tracker sends periodic and event driven updates.
- Save the configuration to device flash so settings persist across power cycles.
- Restart or reset the device when required to apply new network and server parameters.

## Plaspy Server Settings

- Server domain d.plaspy.com is the canonical Plaspy server name to configure on the tracker.
- Server IP 54.85.159.138 is the public Plaspy endpoint that can be used if a numeric address is required.
- Port 8888 is the single port Plaspy uses for all devices and must be configured on the tracker.
- Transport support for UDP or TCP is available; the tracker may be set to use either transport to reach Plaspy.
- Plaspy automatically detects the tracker protocol so you do not need to choose a protocol-specific profile on the platform side.

## Typical Requirements Before Setup

- A powered TT 8750+ within the device operating voltage range and properly installed in the vehicle or test bench.
- An active cellular SIM with a data plan and the correct APN for the subscriber network.
- Access to the official SkyPatrol configuration method or vendor tool to send AT commands or vendor-specific configuration files.
- A means to communicate with the device (serial console, USB adapter, configuration software, or SMS if supported by the vendor).
- Basic knowledge of saving and restarting the device so changes are persisted and applied.
- Access to the SkyPatrol support documentation or vendor resources for firmware specific notes.

## How This Tracker Connects to Plaspy

When the TT 8750+ is configured for Plaspy it opens a data session and transmits position and event messages to the shared Plaspy endpoint and port. Plaspy receives messages from the tracker and maps them to the correct device using automatic protocol detection.

- The device is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The tracker can use either UDP or TCP transport when sending data to Plaspy.
- Reporting intervals and event triggers are typically controlled by AT$TTCNT and AT$TTFNT style commands on the TT 8750+.
- Plaspy automatically detects the device protocol and parses incoming messages for location and event visibility.
- Once the tracker is successfully sending messages to Plaspy the device will appear and stream data in the platform.

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method or software provided by the vendor to send AT commands or upload a configuration profile.
2. Enter d.plaspy.com as the server domain or use 54.85.159.138 as the server IP when the device requires a numeric address.
3. Set the server port to 8888 on the device.
4. Choose UDP or TCP if the tracker requires an explicit transport selection during setup.
5. Configure APN settings and any credentials required for the SIM to establish a data connection.
6. Apply or save the configuration on the device (for the TT 8750+ this is typically done with AT&W or equivalent save command).
7. Restart or reset the device if required for the new settings to take effect.
8. Validate that the device reports to Plaspy by checking messages arriving at the Plaspy endpoint or by confirming visibility in the platform.

## Example Configuration Commands

The following commands are public example commands used for configuring a SkyPatrol TT 8750+. These preserve the original order and include placeholders where appropriate. Replace placeholders such as [apn], [apnu], and [apnp] with your operator APN and credentials.

Initial reset to factory defaults and save
```
AT&F
AT&W
```

Set APN for data connection
```
AT+CGDCONT=1,"IP","[apn]"
```

Optional APN username and password command (include only if required by your operator)
```
AT$CGPCO=1,"[apnu],[apnp]",0
```

Configure Plaspy server destination using the Plaspy public IP and port 8888
```
AT$TTSRVDST=1,1,"54.85.159.138",8888,2
```

Set message mask (controls which message types are sent)
```
AT$TTMSGMASK=1,1065353215
```

Configure periodic reporting when device is turned on and off and other timers
```
AT$TTCNT=1,2,60
AT$TTFNT=10,0,14,1,0
AT$TTFNT=10,2,9,1,1
AT$TTFNT=10,3,20,10,1

AT$TTCNT=2,2,60
AT$TTFNT=11,0,14,2,0
AT$TTFNT=11,2,9,0,0
AT$TTFNT=11,3,20,11,1
```

Example event driven reporting rules (input events, battery disconnect, motion and similar)
```
AT$TTFNT=20,0,0,1,1
AT$TTFNT=20,3,20,1,1

AT$TTFNT=21,0,0,0,0
AT$TTFNT=21,3,20,1,1

AT$TTFNT=12,0,1,1,1
AT$TTFNT=12,3,20,4,1

AT$TTFNT=13,0,1,0,0
AT$TTFNT=13,3,20,5,1

AT$TTFNT=14,0,3,0,0
AT$TTFNT=14,3,20,6,1
```

Additional optional or commented rules from vendor examples
```
'AT$TTFNT=15,0,71,2,3
'AT$TTFNT=15,3,20,7,1

'AT$TTFNT=16,0,71,1,1
'AT$TTFNT=16,3,20,16,1
```

Ignition and other inputs examples
```
AT$TTFNT=17,0,3,0,0
AT$TTFNT=17,3,20,17,1

' AT$TTFNT=37,0,7,1,1
AT$TTFNT=37,0,9,1,1
AT$TTFNT=37,3,20,2,1

' AT$TTFNT=38,0,7,0,0
AT$TTFNT=38,0,9,0,0
AT$TTFNT=38,3,20,3,1
```

Set target profile and save to flash
```
AT$TTARG=2
AT&W
```

Optional restart to apply settings
```
AT$RESET
```
Notes on placeholders: [apn] is the cellular APN for your SIM. [apnu] and [apnp] are optional APN username and password values used by some operators. Keep placeholders unchanged until you replace them with your actual operator values.

## Configuration Notes

- Firmware differences and hardware revisions can change available AT commands or parameter semantics; verify the exact command set for your device firmware version.
- Choose TCP or UDP based on your installation and network; both transports are supported but behaviors such as retransmit and session state differ.
- Use AT&W or the vendor save command to persist settings; unsaved settings may be lost after power cycle.
- The example commands include commented lines from vendor samples; uncomment or adapt only those rules you need for your installation.
- Confirm APN and credential details with your cellular operator and test connectivity before relying on live fleet monitoring.

## Why Use Plaspy with This Configuration

Using the SkyPatrol TT 8750+ with Plaspy gives organizations a straightforward way to centralize GPS and event data from a reliable tracker into a single platform. With the shared Plaspy server settings and automatic protocol detection, integrating the TT 8750+ is mostly a matter of applying APN and server parameters and configuring the device reporting rules.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current and device specific setup details, firmware notes, and installation guidance verify the official SkyPatrol documentation at https://www.skypatrol.com/ before final deployment.
