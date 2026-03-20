---
slug: /gator/m588s/configuration
id: m588s-configuration
sidebar_label: Configuration
title: Gator - M588S Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Gator M588S to connect with Plaspy using shared server settings and SMS commands
keywords:
  - Gator M588S configuration
  - Gator M588S setup
  - Gator M588S Plaspy
  - Gator GPS tracker configuration
  - M588S server configuration
  - GPS tracker SMS setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - Plaspy server configuration
  - Gator M588S tracking setup
---

# Gator - M588S Configuration

This page documents the public configuration context for using the Gator M588S tracker with the Plaspy platform. It focuses on the practical, public-facing settings and commands that prepare the device to report to Plaspy, and it includes sample SMS-based configuration commands that are commonly published for this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor-supplied tools. Use this guide to understand the required server values and workflow; always cross-check device-specific details with the official Gator documentation.

## Configuration Overview

The goal of the configuration process is to point the M588S at Plaspy's server so the device can send location and event data to the platform and appear in your Plaspy account. For many installations the M588S can be configured by SMS commands sent from an authorized phone number using the device default password.

- Configure the tracker to report to Plaspy's shared server endpoint and port.
- Provide APN and any required APN credentials so the device can open GPRS data connections (when applicable).
- Validate transport selection (UDP or TCP) and save the configuration on the device.
- Confirm the device appears in Plaspy and is reporting location and status.
- Use SMS or the manufacturer tool as appropriate to apply and verify the settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible Gator M588S device installed according to the manufacturer's instructions.
- A working SIM card with an active data plan and SMS capability if you will configure by SMS.
- The device default password for SMS configuration; public examples for this model show 123456 as the default password.
- Access to the official Gator configuration method such as SMS commands or vendor configuration software.
- Knowledge of the correct APN for your mobile network and any APN username or password if required.
- A phone number authorized to send configuration SMS messages to the tracker.

## How This Tracker Connects to Plaspy

When configured, the M588S sends its location and status updates to Plaspy's shared server endpoint and port so the unit can be managed and monitored within the Plaspy platform. Plaspy uses the same port for all supported devices and automatically determines the tracker protocol so no protocol selection is required on the platform side.

- The tracker reports GPS position and device events to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device configuration and firmware options.
- Plaspy automatically detects the tracker protocol so standard server settings are sufficient.
- Successful configuration enables visibility in Plaspy for real time location, alerts, and status monitoring.
- Verification is performed by checking that the device appears and updates in the Plaspy platform.

## Common Configuration Workflow

1. Access the official Gator configuration method or software (SMS commands, manufacturer tool, or installer interface).
2. Enter the Plaspy server address by using either d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose the transport mode UDP or TCP if the device requires an explicit selection.
5. Apply or save the configuration on the device, following the manufacturer's procedure.
6. Restart or power-cycle the device if the firmware requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by confirming the unit appears and updates in the Plaspy platform.

## Example Configuration Commands

The Gator M588S is commonly configured by SMS. The public command examples below use the device default password 123456 and include placeholders you must replace:

- {{apn}} = your mobile network APN
- {{apnu}} = APN username if required (optional)
- {{apnp}} = APN password if required (optional)
- {{DeviceID}} = the device identifier or IMEI used by the tracker
- {{phoneNumberUser}} = your phone number for SOS or monitoring as required by the command syntax

If your APN requires username and password, send the following SMS command (preserve the sequence and commas as required by the device):

```text
SS,*{{apn}}*,*{{apnu}}*,*{{apnp}}*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

If your APN does not require username or password, use this shorter command variant:

```text
S,*{{apn}}*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

Notes on these commands:
- Replace each placeholder (for example {{apn}}) with the actual value for your SIM/network and device.
- The final value in both commands is the device password; public guidance for this model shows 123456 as the default password.
- Send SMS commands from an authorized phone number and wait for the device confirmation SMS if provided by the device firmware.
- If the device confirms the new server settings, proceed to power-cycle the unit if required.

## Configuration Notes

- Firmware and language differences between regional device builds can change command syntax and responses; always confirm exact command formats from the manufacturer manual.
- The M588S supports both UDP and TCP transport options; choose the transport type required by your installation and carrier, and set it on the device if necessary.
- SMS-based setup is commonly documented for this model, but some installers prefer the manufacturer's configuration software or an installer tool when available.
- APN credential handling varies by carrier; include APN username and password placeholders only when your network requires them.
- If the device does not respond to SMS configuration, verify the SIM status, SMS credit, and that the sending phone number is authorized.

## Why Use Plaspy with This Configuration

Configuring the Gator M588S to report to Plaspy provides centralized visibility and operational oversight for vehicle tracking and fleet management. By pointing the device to Plaspy's shared server endpoint and port you enable continuous reporting into the Plaspy platform where location, alerts, and status can be monitored and acted on.

To learn more about Plaspy and the services offered, visit https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer details on the official Gator website http://en.gatorgroup.cn as specifications and setup procedures can change over time.
