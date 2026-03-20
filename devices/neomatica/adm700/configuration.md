---
slug: /neomatica/adm700/configuration
id: adm700-configuration
sidebar_label: Configuration
title: Neomatica - ADM700 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for Neomatica ADM700 configuration for use with Plaspy including server settings and practical setup steps
keywords:
  - Neomatica ADM700 configuration
  - ADM700 Plaspy setup
  - Neomatica ADM700 server configuration
  - ADM700 GPS tracker setup
  - Neomatica vehicle tracker configuration
  - ADM700 fleet management setup
  - Plaspy tracker configuration
  - ADM700 GSM GPRS configuration
  - Neomatica ADM700 integration
  - ADM700 telemetry configuration
---

# Neomatica - ADM700 Configuration

This page covers the public configuration context for using the Neomatica ADM700 tracker with Plaspy. It summarizes the practical server settings and workflow you will need to point an ADM700 at Plaspy so the device can forward position, telemetry and event data for real time tracking and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary with firmware version, hardware revision, installation type and vendor configuration tools. Use this guide to prepare the ADM700 for Plaspy integration and consult Neomatica documentation for device specific commands and firmware behaviors.

## Configuration Overview

The goal of configuration is to prepare the ADM700 for reliable data delivery to Plaspy and to validate connectivity so the device appears in the Plaspy platform for monitoring and reporting. The ADM700’s GSM GPRS transport and dual SIM capability make it well suited for continuous fleet use, with onboard logging keeping records when coverage is intermittent.

- Configure the ADM700 to report to the Plaspy server endpoint so location and telemetry are received reliably.
- Select the transport method and set the Plaspy port so the device can establish a session over GPRS.
- Verify the device has an active data connection and that SIM settings support GPRS upload.
- Validate that the ADM700 uploads stored logs to Plaspy after restoring connectivity.
- Confirm the unit is visible in Plaspy and that critical telemetry such as CAN and pulse inputs are being received.
- Save and document the configuration for future maintenance and firmware updates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so a single server and port work for supported devices

These values are the public settings to enter when configuring the ADM700 so it reports to Plaspy.

## Typical Requirements Before Setup

- A powered and installed ADM700 with access to the manufacturer configuration method or software
- One or two active SIM cards with a data plan enabled for GSM GPRS uploads
- Physical access to the unit or remote configuration channel enabled by the installer
- Knowledge of the device firmware version and the manufacturer tools required to change server and port settings
- Confirmation that the device has adequate GSM coverage at the installation site for initial connectivity validation
- Optional microSD or sufficient internal storage to retain logs until uploads are verified

## How This Tracker Connects to Plaspy

The ADM700 sends position fixes, telemetry and event logs over GSM GPRS to the Plaspy ingestion endpoint. Once configured to the Plaspy server and port the device will forward both live data and stored records when connectivity permits.

- The device is set to report to d.plaspy.com or 54.85.159.138 using port 8888
- You can select UDP or TCP on the device when transport choice is required; Plaspy accepts both on port 8888
- Plaspy automatically detects the tracker protocol so your unit will be interpreted correctly once messages reach the server
- Stored route records and event logs are uploaded to Plaspy after connectivity is restored to ensure no data gaps
- Telemetry from CAN, analog inputs and pulse inputs is forwarded as configured so Plaspy can map inputs to alarms and reports

## Common Configuration Workflow

1. Access the official Neomatica ADM700 configuration method or software provided by the manufacturer or your vendor.
2. In the server or data upload settings, enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888 to match Plaspy ingestion.
4. Choose the transport method UDP or TCP if the device requires selecting one.
5. Apply or save the configuration parameters in the ADM700 management tool.
6. Restart the device if the manufacturer recommends a reboot for new settings to take effect.
7. Validate that the device reports to Plaspy by checking for incoming data in the Plaspy platform or confirming successful session establishment from the device logs.

## Example Configuration Commands

The ADM700 supports configuration via Neomatica tools, USB, SMS or GPRS depending on firmware and installer workflows. Exact command syntax and tools vary by manufacturer firmware and regional product variants, so the manufacturer documentation is the authoritative source for specific command strings and SMS formats.

If you use a Neomatica configuration utility or SMS commands provided by your vendor, the key public settings you will apply are the Plaspy server domain d.plaspy.com or IP 54.85.159.138 and port 8888, selecting UDP or TCP as required. For SMS based setup, preserve any placeholders provided by your vendor such as APN credentials and explain them to the carrier or installer.

## Configuration Notes

- Firmware differences can change the exact menu path or command syntax used to update server and port settings; always check the device firmware release notes.
- Choose UDP or TCP according to installer preference or local network reliability; Plaspy supports both transports on the same port 8888 and performs automatic protocol detection.
- Dual SIM behavior and failover depend on SIM configuration and firmware; ensure both SIMs are provisioned correctly if you plan failover use.
- For devices using SMS configuration methods, verify that SMS commands are supported and that the SIM has SMS permissions.
- Large offline logs will be uploaded when GPRS connectivity resumes; confirm that the device retains the required history in internal memory or on microSD.

## Why Use Plaspy with This Configuration

Using the ADM700 with Plaspy gives fleet operators continuous visibility across vehicles and equipment, combining the device’s rugged design and deep telemetry interfaces with Plaspy’s centralized tracking and reporting. Pointing the ADM700 at Plaspy using the shared server settings ensures a consistent ingestion path that supports realtime monitoring, event alerts and historical route playback.

To learn more about Plaspy and supported device configurations visit https://www.plaspy.com. For the latest device specific setup methods, firmware behavior and manufacturer guidance verify details at the Neomatica website https://neomatica.com/ as vendor documentation may be updated over time.
