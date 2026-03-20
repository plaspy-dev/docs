---
slug: /condor/tp_810/configuration
id: tp_810-configuration
sidebar_label: Configuration
title: Condor - TP-810 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Condor TP-810 with Plaspy server settings and SMS commands for quick setup and reliable personal GPS monitoring
keywords:
  - Condor TP-810 configuration
  - Condor TP-810 setup
  - TP-810 Plaspy configuration
  - Condor GPS tracker setup
  - personal GPS tracker configuration
  - Plaspy server configuration
  - tracker SMS configuration
  - TP-810 panic button setup
  - wearable GPS tracker configuration
  - Condor TP-810 compatibility with Plaspy
---

# Condor - TP-810 Configuration

This page covers the public configuration context required to use the Condor TP-810 with Plaspy. It describes the shared Plaspy server settings, the typical preparation steps, and the publicly available SMS commands included in the device documentation so you can configure the tracker to report to Plaspy for personal location monitoring and panic alerting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TP-810 documentation includes SMS based configuration examples; this guide preserves those public commands and explains how to apply them for Plaspy compatibility.

## Configuration Overview

This configuration process prepares the TP-810 to communicate with Plaspy by setting network access, the reporting server, and basic reporting behavior. The goal is to ensure the tracker can reach Plaspy and forward location plus panic events reliably.

- Configure the device APN and GPRS mode so it can send data to Plaspy.
- Point the tracker to Plaspy server settings so location packets route to Plaspy.
- Set a short identifier and timezone so the device displays correctly in the platform.
- Enable regular position updates and the panic workflow so alerts appear in Plaspy.
- Verify the device reports successfully to Plaspy after saving settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol so devices can report using supported formats without manual protocol selection

## Typical Requirements Before Setup

- A charged TP-810 unit with an active SIM card that has GPRS data and SMS capability as required by the device documentation.  
- The device IMEI available for identification and any IMEI derived identifiers.  
- APN, APN username, and APN password information from the mobile operator for data connectivity.  
- Access to the official Condor configuration method such as SMS commands or vendor configuration tools.  
- A Plaspy account and access to the Plaspy platform to confirm the tracker appears after configuration.  
- Basic familiarity with sending SMS commands to the tracker or using the manufacturer setup utility.

## How This Tracker Connects to Plaspy

The TP-810 can be configured to send GPRS position and event data to the shared Plaspy server endpoint and port. Once configured, position updates and panic events are forwarded to Plaspy where they are viewable and actionable by administrators and caregivers.

- The tracker sends location packets to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.  
- Plaspy detects the tracker protocol automatically and ingests reported messages without per device protocol selection.  
- Panic button events are transmitted to Plaspy and can trigger platform notifications and response workflows.  
- Emergency call events from the device can be recorded in Plaspy as part of incident histories.  
- Regular reporting intervals let Plaspy display live location and historical movement for monitoring and response.

## Common Configuration Workflow

1. Access the official Condor configuration method for the TP-810, typically SMS based commands or the vendor configuration tool.  
2. Enter the Plaspy server address by specifying either the domain d.plaspy.com or the server IP 54.85.159.138 as supported by the device.  
3. Set the server port to 8888 in the device configuration.  
4. Choose UDP or TCP as the transport if the tracker requires a transport selection during setup.  
5. Save or apply the configuration on the device and, if necessary, restart the tracker to activate network settings.  
6. Validate that the device reports to Plaspy by checking the device status and live position in your Plaspy account or by using the device verification command.  
7. If reporting fails, confirm APN parameters, SIM data allowance, and that firmware supports the used command syntax.

## Example Configuration Commands

The TP-810 documentation provides an SMS based configuration sequence. The device default password used in these examples is 0000. Replace placeholders and values as described below before sending each SMS.

- APN setup  
  Use this command to set the operator APN. Replace {{apn}} with the operator APN. If your operator requires username and password, include {{apnu}} and {{apnp}} where supported by the device.
  ```
  APN,0000,{{apn}}
  ```
  Optional with username and password:
  ```
  APN,0000,{{apn}},{{apnu}},{{apnp}}
  ```

- Set a 5 digit identifier (alias)  
  Use the last 5 digits of the device IMEI as the identifier. Replace 12345 with the actual last five digits of the IMEI.
  ```
  ALIAS,0000,12345#
  ```
  Note: The public model instructions indicate using the last five digits of the IMEI. Replace the example value above with your device specific digits.

- Set timezone to UTC 0
  ```
  GMT,0000,-0#
  ```

- Set GPRS server to Plaspy (public example uses the Plaspy server IP and port)  
  This command configures the tracker to report to the Plaspy server IP address at port 8888 using the transport indicated in the command.
  ```
  SERVIDOR,0000,54.85.159.138,8888,U,A#
  ```
  Note: If your device accepts a domain name, d.plaspy.com may be used in place of the IP address where supported by the tracker firmware.

- Set update interval to every 1 minute  
  ```
  INTERVALO,0000,M,6#
  ```

- Set GPRS mode to enabled
  ```
  GPRS,0000,A#
  ```

- Check current connection settings (verification)
  ```
  CONEXION,0000#
  ```

Keep the command order when initialising the device to ensure connectivity and reporting parameters are applied before enabling reporting intervals. The default SMS password 0000 is shown in each example; if you have changed the device password, replace 0000 with your current password.

## Configuration Notes

- The SMS command syntax and available parameters can vary by firmware revision and vendor tool, so verify commands against the current Condor TP-810 documentation.  
- Some trackers accept domain names and some require an IP address in the server command. The public example uses the Plaspy IP 54.85.159.138 but d.plaspy.com is also the canonical domain for Plaspy.  
- TCP versus UDP selection affects transport behavior; choose the transport supported by your network and device, and remember Plaspy listens on port 8888 for both transports.  
- APN, APN username, and APN password are operator specific; preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator values.  
- SMS based setup is convenient for field deployments but confirm the device has adequate data and SMS access before relying on GPRS reporting.

## Why Use Plaspy with This Configuration

Using the Condor TP-810 with Plaspy provides a focused personal safety solution where live location, panic alerts, and simple incident logging are essential. The shared Plaspy server settings and automatic protocol detection simplify integration, letting teams deploy personal trackers quickly and view events and locations centrally.

Learn more about Plaspy and supported device workflows at https://www.plaspy.com. Please verify the latest device specific setup details, firmware behavior, and command syntax on the manufacturer website https://condorskyseeker.com/ as manufacturer specifications and setup methods can change over time.
