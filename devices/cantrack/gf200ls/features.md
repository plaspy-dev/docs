---
slug: /cantrack/gf200ls/features
id: gf200ls-features
sidebar_label: Features
title: CanTrack - GF200LS Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the CanTrack GF200LS GPS tracker and how it works with Plaspy for long term asset tracking and tamper alerts
keywords:
  - CanTrack GF200LS
  - GF200LS features
  - CanTrack GF200LS GPS tracker
  - GF200LS battery life
  - GF200LS Plaspy compatibility
  - GF200LS IP65
  - long standby GPS tracker
  - magnet mounted tracker
  - asset GPS tracker
  - container tracking device
---

# CanTrack - GF200LS Features

This page describes the public feature context for using the CanTrack GF200LS with Plaspy. It focuses on the practical capabilities of the GF200LS that are relevant to Plaspy users, including how position and event data are used for monitoring, historical reporting, and tamper notification within Plaspy dashboards and mobile views.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, installation method, and the manufacturer's implementation choices. Where appropriate, this page highlights general functions and integration implications; consult the manufacturer for device specific and firmware level details.

## Feature Overview

The GF200LS is a low maintenance, magnetic mount asset tracker designed for long standby deployments and periodic reporting. Its design balances long battery life with configurable reporting modes so organizations can choose longer-term telemetry or short-term real-time visibility depending on operational needs.

- Ultra long standby operation when configured for minimal reporting intervals to reduce maintenance visits.
- Configurable working modes including real time and interval reporting to trade off between battery life and update frequency.
- Rugged external mount with IP65 rated housing and a strong magnet for quick installation on metal assets.
- Light sensor based tamper alerts that report removal attempts or cover removal events to Plaspy as actionable events.
- Cellular GNSS reporting for live and historical location visibility in Plaspy.

## Core Features of CanTrack - GF200LS

- Long standby battery operation using three CR123 cells to support multi year deployments at low reporting rates as documented by the manufacturer.
- Multiple working modes such as real time, interval, and clock mode to control how often the device reports location.
- Built in GNSS with a sensitive receiver for quick position fixes and typical sub 5 meter accuracy in normal conditions.
- Multi network cellular connectivity covering LTE and 2G GSM for broad area reporting capability.
- IP65 ABS enclosure with a removable magnetic mount that simplifies installation on vehicles, containers, and other metal assets.
- Light sensor anti tamper reporting to notify of removal or cover opening events.
- Remote configuration and management via SMS commands and configurable server settings for APN and server IP or port.

## How These Features Work with Plaspy

The GF200LS reports position and event data that Plaspy ingests to provide visibility and historical context. Plaspy presents those reports in live tracking views, route history, and event feeds so operators can act on location updates and tamper notifications.

- Live and historical location display in Plaspy using the device position reports from the tracker.
- Tamper and removal events appear as alerts or timeline events in Plaspy so teams can prioritize investigation or recovery actions.
- Mode driven data flows where real time mode supplies frequent updates and interval or clock modes supply periodic telemetry for long term monitoring.
- Server and APN configuration support enables the tracker to send data into Plaspy so reports appear consistently in dashboards.
- Plaspy can combine GF200LS location and event records with other Plaspy compatible inputs or integrations to give broader operational context.

## Typical Use Cases

- Low maintenance monitoring of loaned or leased vehicles where infrequent location checks preserve battery life.
- Container and cargo tracking during long transit or storage cycles where periodic position reports are sufficient.
- Financial collateral or loan asset monitoring to provide discreet location verification for dispersed assets.
- Stolen asset recovery assistance where discreet telemetry and tamper alerts support recovery workflows.
- Seasonal or rarely moved equipment tracking to maintain an inventory of location without regular onsite visits.
- Fleet visibility for heavy duty vehicles that benefit from an externally mounted, rugged tracker.

## Feature Availability Notes

- Exact battery life and standby performance depend on configured reporting rate, cellular conditions, and firmware behavior.
- Firmware and hardware revisions, as well as regional cellular variants, can change feature sets and supported commands.
- Some capabilities depend on proper installation and placement of the device for GNSS and cellular reception.
- Check manufacturer documentation for the most current details on supported bands, command sets, and configuration options.

## Why Use Plaspy with These Features

Using Plaspy with the GF200LS turns periodic and event driven location reports into operational visibility. Plaspy provides the interface for live tracking, historical route review, and alerting so organizations can monitor distributed assets with lower maintenance overhead while keeping awareness of tamper and removal events.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer guidance please verify details on the official CanTrack site https://www.cantrackgps.com/ because device features and implementation details can change over time.
