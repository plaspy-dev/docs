---
slug: /pst/avl_011/configuration
id: avl_011-configuration
sidebar_label: Configuration
title: PST - AVL-011 Configuration
sidebar_class_name: menu_item_tracker
description: Configure PST AVL 011 for use with Plaspy using public server settings and SMS commands
keywords:
  - PST AVL 011 configuration
  - PST AVL 011 setup
  - PST AVL 011 Plaspy
  - PST GPS tracker configuration
  - AVL 011 server configuration
  - GPS tracker setup Plaspy
  - vehicle tracking configuration
  - Plaspy tracker setup
  - GPS tracker SMS configuration
  - fleet tracking configuration
---

# PST - AVL-011 Configuration

This page covers the public configuration context for using the PST AVL-011 tracker with Plaspy. It explains the shared Plaspy server settings and the practical steps you can follow to prepare an AVL-011 for communication with the Plaspy platform. Where public manufacturer commands are available they are presented as SMS examples so you can apply them with the device's standard configuration method.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools used by the installer. The AVL-011 model supports SMS based configuration in public documentation and the example commands below use the device default password 000000 as shown in the public command set.

## Configuration Overview

The goal of configuring an AVL-011 for Plaspy is to point the tracker at the Plaspy server endpoint, set the carrier APN and transport mode, and validate that the device successfully reports to the platform. For AVL-011 the vendor provides SMS commands for common settings including timezone, APN, server host and mode selection.

- Prepare the tracker to communicate with Plaspy by setting the correct APN and GPRS mode.
- Point the tracker to the Plaspy server endpoint so location and event data are routed to your account.
- Choose the appropriate transport protocol and ensure the correct port is configured.
- Validate connectivity by confirming the tracker appears and reports in the Plaspy platform.
- Use SMS or manufacturer configuration tools as provided in your device documentation.

## Plaspy Server Settings

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888  
- automatic protocol detection in Plaspy so the platform detects the device protocol when data is received  
Note that all devices in Plaspy use the same port and the platform will automatically detect the tracker protocol.

## Typical Requirements Before Setup

- Device is powered and accessible so it can receive SMS configuration commands or be connected to the manufacturer tool.  
- A working SIM card with a data plan and the carrier APN values ready for configuration.  
- Ability to send SMS messages to the device if using SMS based configuration.  
- Knowledge of the current device password; the public examples use the device default password 000000.  
- Access to the official manufacturer configuration method or software for your AVL-011 firmware revision.  
- Basic account access to Plaspy so you can validate the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

The AVL-011 is configured to report to the shared Plaspy server endpoint and port so location and event data arrive in the Plaspy platform for monitoring and reporting. Configuration makes the device send GPRS data to the Plaspy server and the platform handles protocol detection and session handling.

- The tracker is pointed to the Plaspy server host or IP and configured to use port 8888.  
- The device transmits data over GPRS and uses either UDP or TCP transport as configured on the device.  
- Plaspy automatically detects the tracker protocol when it receives inbound traffic.  
- Once connected the device becomes visible in Plaspy for real time monitoring and event reporting.  
- Validate successful connection by checking that the tracker is listed and updating in your Plaspy account.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the AVL-011, or prepare to send the documented SMS commands.  
2. Enter d.plaspy.com or 54.85.159.138 as the server host depending on whether the device accepts a hostname or requires an IP.  
3. Set port 8888 for the GPRS server entry.  
4. Choose UDP or TCP if the device requires transport selection; both transports are supported by Plaspy on port 8888.  
5. Configure the SIM APN and any APN username or password fields required by your carrier.  
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.  
7. Validate that the device reports to Plaspy and appears in the platform with live updates.

## Example Configuration Commands

To set the tracker send the following commands by SMS messages. The sample setup uses the device default password 000000. Replace placeholders such as [apn], [apnu], and [apnp] with your carrier values where applicable.

- Set the timezone to UTC 0
```text
W000000,032,0
```

- Set the operator APN
```text
W000000,011,[apn],[apnu],[apnp]
```
Note: [apn] is your carrier APN. [apnu] and [apnp] are optional APN username and APN password placeholders that should be included only if your carrier requires them.

- Set the GPRS server to the Plaspy IP and port
```text
W000000,012,54.85.159.138,8888
```
If your device accepts hostnames you may instead enter d.plaspy.com where a host is required by the configuration UI or command syntax.

- Switch the tracker to GPRS mode
```text
W000000,013,1
```

These commands are public examples from manufacturer documentation and preserve the default device password 000000. After initial setup it is recommended to follow the manufacturer guidance to change the default password for security.

## Configuration Notes

- The SMS command format shown uses the default password 000000. Confirm the default for your unit and change it if required.  
- Some firmware revisions may change command syntax or behaviour. Always confirm the command set for your device firmware version.  
- If your device supports entering a hostname use d.plaspy.com otherwise use the IP 54.85.159.138 as shown in the public command example.  
- Choose UDP or TCP based on installer preference and network reliability; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.  
- SMS based setup is supported in the public command set but you can also use the official manufacturer tools if available for bulk or wired configuration.

## Why Use Plaspy with This Configuration

Using the AVL-011 configured to report to Plaspy gives organizations centralized visibility into vehicle location and event reporting while using a consistent server configuration. Plaspy handles protocol detection and provides a unified ingestion point so you can manage multiple device models without per device port differences.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions and command sets on the manufacturer's official website before deployment.
