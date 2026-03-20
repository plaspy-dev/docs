---
slug: /gosafe/g2c_db/protocol
id: g2c_db-protocol
sidebar_label: Protocol
title: Gosafe - G2C-DB Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Gosafe G2C DB tracker and how it communicates with Plaspy for reliable location and telemetry
keywords:
  - Gosafe G2C-DB protocol
  - Gosafe G2C-DB GPS protocol
  - Gosafe G2C-DB protocol for Plaspy
  - Gosafe G2C-DB communication protocol
  - Gosafe G2C-DB tracking protocol
  - Gosafe GPS tracker Plaspy
  - G2C-DB Plaspy compatibility
  - Gosafe asset tracker protocol
  - Gosafe long life GPS tracker
  - vehicle tracking G2C-DB
---

# Gosafe - G2C-DB Protocol

This page documents the public protocol context for using the Gosafe G2C-DB tracker with Plaspy. It focuses on how the device communicates location, movement telemetry, device health and store and forward data into Plaspy without exposing firmware internals or private implementation details. The G2C-DB is a rugged long life tracker designed for trailers containers and remote equipment and this page explains how its reporting patterns and connectivity options map to Plaspy ingestion.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available features can vary by firmware version hardware revision and manufacturer implementation so this page provides general protocol context while recommending verification against device specific manufacturer documentation where needed.

## Protocol Overview

The protocol used by the G2C-DB enables reliable delivery of GNSS fixes motion events and device status from the tracker to a remote server for fleet management and anti theft monitoring. It covers how the device establishes transport to the server how it reports periodic or event driven data and how store and forward memory supports intermittent coverage.

- Enables the tracker to report GNSS coordinates timestamps and basic device state for ingestion by Plaspy
- Carries motion and tamper events detected by the on board accelerometer to support anti theft alerts
- Supports store and forward of recorded records so events are not lost in intermittent cellular coverage
- Allows device configuration and remote updates such as FOTA through supported control channels
- Balances reporting frequency and power consumption to preserve long battery life in low maintenance deployments

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections at a single shared endpoint and port and applies automatic protocol detection for most supported trackers including the G2C-DB. When a properly configured G2C-DB reports to the Plaspy endpoint the platform identifies the device type and extracts usable telemetry without requiring manual protocol selection from the user.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy public server IP is 54.85.159.138 and the platform accepts device connections on port 8888
- All devices in Plaspy use the same port which simplifies device configuration at scale
- Plaspy can automatically detect the tracker protocol so manual selection inside Plaspy is typically not required if the device reports to the Plaspy endpoint
- Devices configured to use TCP UDP or supported SMS channels will be matched to their reporting protocol when they connect or send data

## Transport and Connection Context

The G2C-DB can use cellular data channels to reach Plaspy and the transport selection affects reliability power consumption and configuration. The device supports TCP reporting and SMS based reporting as part of its connectivity options and may be configured to use either UDP or TCP on the platform shared port depending on device firmware and setup.

- Devices may be configured to point at d.plaspy.com or the Plaspy server IP 54.85.159.138
- Plaspy accepts both UDP and TCP based device reports on port 8888
- The G2C-DB also supports SMS reporting as an alternate delivery path for regions or setups that rely on messaging
- Store and forward behavior ensures records are kept locally and uploaded when coverage resumes
- FOTA and remote configuration are implemented over supported transport channels where the device and firmware allow

## Protocol Compatibility Notes

- Firmware differences can change available commands reporting formats and supported transport modes between device revisions
- Hardware revisions and regional model variants such as LTE Cat 1 or GSM only versions may affect cellular connectivity and reporting behavior
- Manufacturer side configuration options and default server settings may differ so confirm device reporting destination and transport mode before deployment
- Selecting UDP versus TCP can affect battery life data reliability and firewall traversal depending on the network environment
- SMS and TCP reporting paths coexist but may require different server addressing or configuration steps on the device
- Validate compatibility and recommended settings against official Gosafe documentation and release notes for the specific G2C-DB unit and firmware

## Why Protocol Understanding Matters

Knowing how the G2C-DB communicates helps ensure smooth initial setup reliable ongoing telemetry and faster troubleshooting when devices behave unexpectedly. Understanding the protocol and transport context reduces configuration errors and supports better operational planning for long life deployments.

- Ensures correct server and transport settings so devices report to the Plaspy endpoint reliably
- Helps balance reporting frequency and battery life by selecting appropriate reporting modes for the use case
- Improves troubleshooting by clarifying whether issues are network transport device firmware or configuration related
- Supports proper use of store and forward features to maintain event continuity in low coverage areas
- Guides firmware update planning when new protocol features or fixes are released by the manufacturer

## Why Use Plaspy with This Protocol

Using the G2C-DB with Plaspy offers a practical solution for organizations that need persistent visibility into trailers containers and remote assets while minimizing maintenance. The device couples robust environmental protection long battery life and store and forward memory with flexible reporting modes so Plaspy can ingest location motion and device health data for fleet management anti theft workflows and asset oversight.

Plaspy receives device telemetry at d.plaspy.com or 54.85.159.138 on port 8888 and automatically detects the tracker protocol so you can focus on configuring reporting modes that match your operational needs. To learn more about Plaspy and how it supports mixed fleets and asset programs visit https://www.plaspy.com. Please note that protocol support firmware behavior and manufacturer implementation details can change over time so verify the latest device specific protocol and firmware information on the official Gosafe website https://gosafesystem.com/ before large scale deployment.
